# Subscribe to signal intervals

## Subscribe notification

After subscribing, the following notification is passed to each invocation of the callback.

These JSON paths refer to values that will be needed to fetch the raw data.

- `result._source.id` is signal id
- `result._source.interval.first` is the ISO 8601 date time of first data point.
- `result._source.interval.last` is the ISO 8601 date time of the last data point.
- `result._source.resolution` is the storage class of the data points.

```json
{
  "status": 200,
  "requestId": "b5cdd2ef-f25d-49ea-a5d1-3d3adb7f1361",
  "timestamp": 1657623074649,
  "volatile": {
    "sdkInstanceId": "funnel",
    "sdkName": "js@7.4.3"
  },
  "index": "rumble",
  "collection": "signal-intervals",
  "controller": "realtime",
  "action": "publish",
  "protocol": "funnel",
  "scope": "in",
  "result": {
    "_id": null,
    "_source": {
      "entityType": "signal",
      "id": "r8oMn3DbDBXjoKbosjZESUaa4Ps",
      "modified": "2021-04-12T20:47:20.884Z",
      "modifier": {
        "entityType": "user",
        "id": "v76O3UhDxPcebRBmXU7mi_i-TME",
        "slug": "toku-systems.superuser",
        "shortName": "Superuser"
      },
      "slug": "api-demo.08-17-23-01w5.upstream-pressure.pressure",
      "allowTenantIds": [
        "d96a0265-0fad-431e-929d-64e3d51442fc"
      ],
      "origin": {
        "entityType": "hardpoint",
        "id": "54414ffb-68d7-40cb-8c75-da64a0ab5c67",
        "slug": "api-demo.08-17-23-01w5.upstream-pressure",
        "shortName": "Upstream Pressure"
      },
      "name": "Pressure",
      "measuringUnit": {
        "entityType": "measuring-unit",
        "id": "UghSj5EpxJs_IuYOOiFM9901j40",
        "slug": "pressure.kilopascal",
        "shortName": "㎪"
      },
      "samplingFrequency": 1,
      "interval": {
        "first": "2022-07-12T10:46:08.000Z",
        "last": "2022-07-12T10:50:57.000Z"
      },
      "resolution": "second",
      "_kuzzle_info": {
        "author": null,
        "createdAt": 1657623074650
      }
    }
  },
  "type": "document",
  "room": "fa7fb5e6bd01a980c88baa873347cf4b-cf3d9b363d487dd10bf35c786e06879b"
}
```
