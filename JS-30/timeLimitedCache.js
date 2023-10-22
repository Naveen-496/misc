
class TimeLimitedCache {
  constructor() {
      this.cache = new Map();
  }
  
  set(key, value, duration) {
      
      const alreadyExists = this.cache.get(key);
      if(alreadyExists) {
          clearTimeout(alreadyExists.timeOutId);
      }
      const timeOutId = setTimeout(() => {
          this.cache.delete(key);
      }, duration);
      this.cache.set(key, {value, timeOutId});
      return Boolean(alreadyExists);
  }
  
  get(key) {
   return this.cache.has(key) ? this.cache.get(key).value : -1;
  }
  
  count() {
      return this.cache.size;
  }
}

const timeCache = new TimeLimitedCache();
console.log(timeCache.set(1, "Hello", 2000));
console.log(timeCache.set(1, "Hello", 3000));
console.log(timeCache.count())
console.log(timeCache.get(1));
