/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
    const resetValue = init;
    
    return {
        increment: () => init++,
        reset: () => (init = resetValue),
        decrement: () => init--,
    };
};


  const counter = createCounter(5)
  counter.increment(); // 6
  counter.reset(); // 5
  counter.decrement(); // 4
  console.log(counter)
  
