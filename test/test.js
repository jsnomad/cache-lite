import CacheLite from '../index'
import { expect, should } from 'chai'

should()

const cache = new CacheLite();

describe('Cache', () => {
  it('should store a value', (done) => {
    cache.set("KeyTest", "DataTest", 50).then(val => {
      expect(val.value).equal('DataTest')
      done()
    })
  })
  it('should return a value', (done) => {
    setTimeout(() => {
      cache.get("KeyTest").then(value => {
        expect(value).equal('DataTest')
        done()
      })
    }, 40)
  })
  it('should not return a value', (done) => {
    setTimeout(() => {
      cache.get("KeyTest").then(value => {
      }).catch((err) => {
        done()
      })
    }, 60)
  })
})

describe('TTL', () => {
  it('should be a number', (done) => {
    cache.set("KeyTest", "DataTest", 100).then(val => {
      expect(val.value).equal('DataTest')
      done()
    })
  })
  it('should not be a string', (done) => {
    cache.set("KeyTest2", "DataTest", "string").then(val => {
    }).catch((err) => {
      done()
    })
  })
})
