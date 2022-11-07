//lets make a function which memorizes things just like memoize.

function memoize(fn){
const cache = new Map(); //creating map to store key values pair.
return function (...args){
  const key = args.toString(); // an array of sequence is converted to string.
  if(cache.has(key)){ //The Cache interface provides a persistent storage mechanism for Request / Response object pairs that are cached in long lived memory.
    return cache.get(key);//so if we passed te function again the cache storage in map(key:value pair) will remember its been called twice so give the last output.
  }
  cache.set(key,fn(...args));
  return cache.get(key);
};
}