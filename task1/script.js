const arr = [1,45,-9,6,6,67,2,3,71,70,14];
const arr1 = [1,3];


//! 1
/**
 * Создайте массив из 10 чисел. 
 * Найдите количество элементов массива,
 * которые отличны от наибольшего не более чем на 10%.
 */

function findCountElementsLessMax(arr) {
  const maxNumber = Math.max(...arr);
  return arr.filter(num => num !== maxNumber && num >=  maxNumber - maxNumber * 0.1).length;
}

console.log(findCountElementsLessMax(arr));

//! 2
/**
 * Создайте массив из 10 чисел. 
 * Найдите и выведите на экран наименьший четный элемент массива.
 */

const findEvenNumbers = (arr) => arr.filter(num => num % 2 === 0);

const findMinNumber = (arr) => (arr.length !== 0) ? Math.min(...arr) : null;
   
console.log(findMinNumber(findEvenNumbers(arr)));

