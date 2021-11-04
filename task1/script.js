const arr = [1,45,-9,6,6,67,4,3,71,70,14];

const findMaxNumber = (arr) => (arr.length !== 0) ? Math.max(...arr) : null;
const findMinNumber = (arr) => (arr.length !== 0) ? Math.min(...arr) : null;
const isEvenNumber = (num) => num % 2 === 0;

/**
 * 1. Создайте массив из 10 чисел. 
 * Найдите количество элементов массива,
 * которые отличны от наибольшего не более чем на 10%.
 */

function findCountElementsLessMax(arr) {
  const maxNumber = findMaxNumber(arr);
  return arr.filter(num => num !== maxNumber && num >=  maxNumber - maxNumber * 0.1).length;
}

console.log(findCountElementsLessMax(arr));

/**
 * 2. Создайте массив из 10 чисел. 
 * Найдите и выведите на экран наименьший четный элемент массива.
 */

const findEvenNumbers = (arr) => arr.filter(isEvenNumber);

console.log(findMinNumber(findEvenNumbers(arr)));

/**
 * 3. Создать массив из 10 чисел. 
 * Среди элементов с нечетными номерами найдите наибольший элемент массива, который делится на 3.
 */

const findNumbersFromOddIndex = (arr) => 
  arr.filter( (num, index) => {
    if (isEvenNumber(index)) {
      return num;
    }
  })

const isDividedByThree = (num) => num % 3 === 0;
const findNumbersIsDividedByThree = (arr) => arr.filter(isDividedByThree);

console.log(findMaxNumber(findNumbersIsDividedByThree(findNumbersFromOddIndex(arr))));

/**
 * 4. Дан массив и число n. Найдите число в массиве, 
 * которое наиболее близко к числу n
 */

const findClosestNumber = (arr, num) => 
  arr.reduce((result, current) => {
    return ((Math.abs(current - num) < Math.abs(num - result))) ? current : result;
  });

console.log(findClosestNumber(arr,69));