const arr = [1,45,-9,6,6,67,2,3,71,70,14];

function findCountElementsLessMax(arr) {
  const maxNumber = Math.max(...arr);
  return arr.filter(num => num !== maxNumber && num >=  maxNumber - maxNumber * 0.1).length;
}

console.log(findCountElementsLessMax(arr));
