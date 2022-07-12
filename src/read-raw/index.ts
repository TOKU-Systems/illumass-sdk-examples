import { createIllumass, RawPoint, TemporalResolution, TimeSeries } from '@illumass/illumass-sdk';
import { jwt } from '../common';
import events from 'events';
import moment from 'moment';

const illumass = createIllumass();

async function authenticate(): Promise<void> {
  // You can authenticate with JWT or username/password
  const ok = await illumass.auth.setJwt(jwt);
  if (!ok) {
    throw new Error(`Invalid JWT`);
  }
}

async function readRaw(): Promise<TimeSeries<RawPoint>> {
  // Note that interval is right open, so we need to add a second to
  // the last timestamp that we want to retrieve
  return await illumass.signalData.raw(
    'signal!r8oMn3DbDBXjoKbosjZESUaa4Ps',
    moment('2022-07-12T10:46:08.000Z'),
    moment('2022-07-12T10:50:57.000Z').add({ second: 1 }),
    TemporalResolution.Second
  );
}

illumass.connect()
  .then(async () => {
    await authenticate();
    const ts = await readRaw();
    console.log(JSON.stringify(ts, undefined, 2));
  })
  .finally(() => illumass.disconnect())
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
