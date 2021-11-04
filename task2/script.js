const arr = [ 
  {a: 2, b: 1}, 
  {a: 50, b: 12}, 
  {a: 95, b: 7} 
];

/**
 * 1. Вывести в консоль 'its valid', если во всех объектах поле a > b, 
 * вывести 'its invalid', если хотя бы в одном объекте a <= b;
 */

// const showIsValidArr = (arr) => {
//   const result = (arr.find(item => item.b > item.a)) ? 'its invalid' : 'its valid';
//   console.log(result); 
// }

const showIsValidArr = (arr) => {
  const result = (arr.find(({a, b}) => b > a)) ? 'its invalid' : 'its valid';
  console.log(result); 
}

showIsValidArr(arr);

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

/**
 * 3. С помощью метода/методов взять все поля a и b и последовательно поместить их в массив
 *     пример получившегося массива: [2,1,5,12,95,7]
 */

const resultArray = [].concat(...arr.map(obj => Object.values(obj)));

console.log(resultArray);