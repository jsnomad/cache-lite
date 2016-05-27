export class CacheLite {

  /**
   * Constructor
   */
  constructor() {
    this.cacheStore = new Map()
  }

  /**
   * Set value in cache
   * @param {string} key
   * @param {string} value
   * @param {string} time to live
   * @return {Promise}
   */
  set(key, val, ttl) {
    return new Promise((resolve, reject) => {
      // Check if the ttl is valid
      if (ttl !== undefined && typeof (ttl) !== 'number') {
        reject(new Error('The ttl must be a number'))
      }
      // Get the value of an already cached value of this key
      const oldValue = this.cacheStore.get(key)
      // If yes, clear the delay set by the previous setTimeout
      if (oldValue) {
        clearTimeout(oldValue.timeout)
      }
      const newValue = {
        value: val,
        createdTime: Date.now(),
      }
      // If the ttl is defined, delete the value from the cache after XX ms
      if (ttl) {
        newValue.timout = setTimeout(() => {
          this.cacheStore.delete(key)
        }, ttl)
      }
      // Add the new value in the cache
      this.cacheStore.set(key, newValue)
      resolve(newValue)
    })
  }

  /**
   * Delete value from the cache
   * @param {string} key
   * @return {Promise}
   */
  del(key) {
    return new Promise((resolve, reject) => {
      // Returns true if an element in the cache existed and has been removed
      const isExist = this.cacheStore.delete(key)
      if (isExist) {
        resolve()
      } else {
        reject(new Error(`The key ${key} doesn't exist in cache`))
      }
    })
  }

  /**
   * Get a value from the cache
   * @param {string} key
   * @return {Promise}
   */
  get(key) {
    return new Promise((resolve, reject) => {
      const temp = this.cacheStore.get(key)
      if (temp) {
        resolve(temp.value)
      } else {
        reject(new Error(`The key ${key} doesn't exist in cache`))
      }
    })
  }

  /**
   * Get keys stored in the cache
   * @return {object}
   */
  getKeys() {
    // The keys method return an iterator
    const keyArray = []
    for (const key of this.cacheStore.keys()) {
      keyArray.push(key)
    }
    return keyArray
  }

  /**
   * Get the number of elements in the cache
   * @return {number}
   */
  size() {
    return this.cacheStore.size
  }

  /**
   * Delete all cached values from the cache
   */
  clear() {
    this.cacheStore.clear()
  }
}
