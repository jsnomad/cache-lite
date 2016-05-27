# Cache Lite [![CircleCI](https://circleci.com/gh/jsnomad/cache-lite.svg?style=svg)](https://circleci.com/gh/jsnomad/cache-lite)

## Description
Simple node key value cache system

## Example
```js
const CacheLite = require('cache-lite');

const cache = new CacheLite()

// Set value in cache for 200ms
cache.set("myKey", "myData", 200).then(() => {
})

// Get value from the cache
cache.get("myKey").then((value) => {
  console.log(value); // myData
})

console.log(cache.getKeys()) // [ 'myKey' ]

console.log(cache.size()) // 1

//Get value from the cache after 300ms
setTimeout(() => {
  cache.get("myKey").then((value) => {
  }).catch((err) => {
    // Error: The key myKey doesn't exist in cache
  })
}, 300);

```

## API
###set(key, value, ttl)
Returns a promises
#### key

Type: `string`

Key

#### value

Type: `string`

Value

#### ttl (optional)

Type: `number`

Time to leave

###get(key)
Returns a promises
#### key

Type: `string`

Key

###getKeys()
Returns keys stored in the cache

###size()
Returns the number of elements in the cache

###clear()
Delete all cached values from the cache

**Requirement : Node >= 5.0**

## License
MIT &copy; [Thomas Blanc-Hector](https://github.com/jsnomad)
