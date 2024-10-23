# english-secs

convert english time expressions to seconds or milliseconds. zero runtime dependencies.

## install

```bash
npm install english-secs --save
```

## usage

```javascript
const etime = require('english-secs');

console.log(etime('1 hour')); // 3600
console.log(etime('2 days 12 hours')); // 216000
console.log(etime('1 month', {milliseconds: true})); // 2678400000
```

## api

`etime(input, options)`

- `input`: string or number. if number, returns input unchanged.
- `options`: object (optional)
  - `milliseconds`: boolean. if true, returns milliseconds instead of seconds.
  - `customUnits`: object. custom unit definitions.
  - `customSingularUnits`: array. custom singular unit names.

## features

- zero runtime dependencies
- lightweight and fast
- supports a wide range of time units and formats

## development

- `yarn install`: install dependencies
- `yarn test`: run tests
- `yarn build`: compile coffeescript to javascript

## license

mit
