function getResolvedPromise(value) {
  return new Promise ( resolve => {
    if (value <= 300) {
      resolve(value)
    } else {
      throw new Error('Ошибка')
    } 
  })
}
(getResolvedPromise(300))
  .then(value => console.log('Value = ', value))
  .catch((err) => console.log(err))
  .finally(() => console.log('This is Finally!'))