[![NPM Badge](https://nodei.co/npm/cache-lite.png?downloads=true&downloadRank=true&stars=true))](https://www.npmjs.com/package/cache-lite)

# cache-lite [![CircleCI](https://circleci.com/gh/jsnomad/cache-lite.svg?style=svg)](https://circleci.com/gh/jsnomad/cache-lite)

## Description
Simple node in-memory caching system

## Download
The source is available for download from
[GitHub](https://github.com/jsnomad/cache-lite).
Alternatively, you can install using Node Package Manager (npm):
<pre>
  npm install cache-lite
</pre>

## Example
```js
const CacheLite = require('cache-lite');

const cache = new CacheLite()

// Set value in the cache for 200ms
cache.set("myKey", "myData", 200).then(() => {
})

// Get value from the cache
cache.get("myKey").then((value) => {
  console.log(value); // myData
})

cache.getKeys() // [ 'myKey' ]

cache.size() // 1

//Get value from the cache after 300ms
setTimeout(() => {
  cache.get("myKey").then((value) => {
  }).catch((err) => {
    // Error: The key myKey doesn't exist in the cache
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

Time to live

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

## Requirement
Node >= 5.0

## License
MIT &copy; [Thomas Blanc-Hector](https://github.com/jsnomad)
