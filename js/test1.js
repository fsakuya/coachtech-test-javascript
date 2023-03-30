const array = [2, 4, 7, 5, 4, 3, 8];

const result = array.filter(function (value, index) {
  // array.indexOf(value) + ":" + index
  return array.indexOf(value) === index  
});

console.log(result);


