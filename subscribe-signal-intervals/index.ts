import { createIllumass } from '@illumass/illumass-sdk';

const jwt = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiIwY2EyNDQ3MS0yMzJhLTRjYjMtOGE2Ni1hM2Q1NTE3NjljMDEiLCJpYXQiOjE2NTc1NjMxNjYsImV4cCI6MTY5MjEyMzE2Nn0.YRG6JA79gOrodysSIKkHL7EFl3nDvJdTcFfUYVRvuiM';
const illumass = createIllumass();
let roomId = '';

async function authenticate(): Promise<void> {
  // You can authenticate with JWT or username/password
  const ok = await illumass.auth.setJwt(jwt);
  if (!ok) {
    throw new Error(`Invalid JWT`);
  }
}

async function subscribe(): Promise<void> {
  roomId = await illumass.kuzzle.realtime.subscribe('rumble', 'signal-intervals', {}, (notification) => {
    console.log(JSON.stringify(notification));
  });
}

illumass.connect()
  .then(async () => {
    await authenticate();
    // await subscribe();
  })
  .finally(async () => {
    if (roomId !== '') {
      await illumass.kuzzle.realtime.unsubscribe(roomId);
    }
  })
  .finally(() => illumass.disconnect())
  .then(() => console.log('done'))
  .catch((err) => console.error(err));