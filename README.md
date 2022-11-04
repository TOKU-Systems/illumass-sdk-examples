# API Demo subscribe example

1. Use `nvm` to install correct version of nodejs.
This example was developed using `lts/fermium`, or `14.19.3`.
2. Install dependencies `npm install`
3. Build examples `npm run build`
4. Run example `npm run <folder in src>`. e.g. `npm run subscribe-signal-intervals`

## Examples

### `read-raw`

Read raw data by location.

### `subscribe-signal-intervals`

Subscribe to signal intervals. Note that this subscribes to signal intervals for
physical sensors on device, and location based sensors.

More details on subscribe can be found [here](./src/subscribe-signal-intervals/README.md).
