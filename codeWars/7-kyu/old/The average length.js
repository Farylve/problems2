
// ['u', 'y'] =>  ['u', 'y'] // average length is 1
// ['aa', 'bbb', 'cccc'] => ['aaa', 'bbb', 'ccc'] // average length is 3
// ['aa', 'bb', 'ddd', 'eee'] => ['aaa', 'bbb', 'ddd', 'eee'] // average length is 2.5 round up to 3



function averageLength(array) { 
  const average = array.reduce((aver, el)=> {
      return el.length + aver
  }, 0) / array.length
  const roundedAvarage  = Math.round(average)
  console.log(average)
  return array.map(el => el[0].repeat(average)); // your code here
}


console.log(averageLength(['aa', 'bbb', 'cccc']));
