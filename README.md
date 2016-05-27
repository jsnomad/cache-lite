# Cache Lite

## Description
Simple node key value cache system

## Using
Store a key
```
//During 3000ms
cache.set("myKey", "myData", 3000).then(() => {})
//Forever
cache.set("myKey", "myData").then(() => {})
```

Get a key
```
//Return a promise
cache.get("myKey").then((value) => {
})
//Rejected promises if the key doesn't exist
.catch(function(err) {
})

```

Get keys stored in the cache
```
cache.getKeys()
```

Get the number of elements in the cache
```
cache.size()
```

Delete all cached values from the cache
```
cache.clear()
```

**Requirement : Node >= 5.0**

## License
MIT &copy; [Thomas Blanc-Hector](https://github.com/jsnomad)
