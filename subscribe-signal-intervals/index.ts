import { createIllumass } from '@illumass/illumass-sdk';
import { jwt } from '../common';
import events from 'events';

const illumass = createIllumass();

async function authenticate(): Promise<void> {
  // You can authenticate with JWT or username/password
  const ok = await illumass.auth.setJwt(jwt);
  if (!ok) {
    throw new Error(`Invalid JWT`);
  }
}

async function subscribe(): Promise<string> {
  return await illumass.kuzzle.realtime.subscribe('rumble', 'signal-intervals', {}, (notification) => {
    console.log(JSON.stringify(notification, undefined, 2));
  });
}

process.stdin.setRawMode(true);
process.stdin.resume();

illumass.connect()
  .then(async () => {
    await authenticate();
    const roomId = await subscribe();
    try {
      console.log('Press any key to quit.');
      await events.once(process.stdin, 'data');
    } finally {
      await illumass.kuzzle.realtime.unsubscribe(roomId);
    }
  })
  .finally(() => illumass.disconnect())
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
