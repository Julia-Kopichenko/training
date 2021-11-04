const arr = [ 
  {a: 2, b: 1}, 
  {a: 50, b: 12}, 
  {a: 95, b: 7} 
];
const obg = {a: 2, b: 1}
const obg1 = {x: 2, y: 1}

/**
 * 1. Вывести в консоль 'its valid', если во всех объектах поле a > b, 
 * вывести 'its invalid', если хотя бы в одном объекте a <= b;
 */

const showIsValidArr = (arr) => {
  const result = (arr.find(item => item.b > item.a)) ? 'its invalid' : 'its valid';
  console.log(result); 
}
showIsValidArr(arr);

// const isObjectFieldValid = (arr) => {
//   return arr.find(item => item.b > item.a)
// }

// const compare = (min, max) => max > min;
// console.log(compare(4,5));

// const isEnterValidObject = (arr, fieldMin, fieldMax) => {
//   return arr.find(item => item.fieldMax > item.fieldMin)
// }
// const isValidObject = (obg) => obg.a > obg.b;

// console.log(isValidObject(obg));


