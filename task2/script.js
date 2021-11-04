const arr = [ 
  {a: 2, b: 1}, 
  {a: 50, b: 12}, 
  {a: 95, b: 7} 
];

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

/**
 * 2. На основе массива arr, создать массив объектов у которых поле b возведено в квадрат
 */

// вариант 1

const newArr = arr.map((obj) => ({...obj, b: Math.pow(obj.b, 2)}));

console.log(newArr); // [ { a: 2, b: 1 }, { a: 50, b: 144 }, { a: 95, b: 49 } ]

// вариант 2

const getSquare = num => Math.pow(num, 2);

const changeFieldValue = (obj, key, fn) => ({...obj, [key]: fn(obj[key])});

const changeArrayItems = (arr, key, fn) => arr.map(item => changeFieldValue(item, key, fn))

console.log(changeArrayItems(arr, 'b', getSquare)); // [ { a: 2, b: 1 }, { a: 50, b: 144 }, { a: 95, b: 49 } ]

