// Reducer Function
function add(a = 0, b = 0) {
  return a + b;
}
// memoize function
const memoize = (reducer) => {
  // initialize an empty cache
  const cache = {};
  // return the function that either returns cached value or calls the reducer with arguments
  return function () {
    console.info("cache: ", cache);
    console.info("arguments: ", arguments);
    // convert the arguments of reducer funtion
    const key = JSON.stringify(arguments);
    //  if the result for arguments already exists in cache, return cached value
    if (key in cache) {
      console.info("Returning cached value");
      return cache[key];
    }
    // else call reducer with arguments, store the result in cache and return the result
    else {
      console.info("Calling the Reducer");
      const result = reducer.apply(this, arguments);
      cache[key] = result;
      return result;
    }
  };
};

const memoizeSubtract = memoize(add);

console.log(memoizeSubtract(50, 20));
console.log(memoizeSubtract(30, 20));
console.log(memoizeSubtract(35, 25)); 
console.log(memoizeSubtract(50, 20)); 
