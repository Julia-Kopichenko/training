export default class NumbersapiService {
  _apiBase = 'http://numbersapi.com'

  async getResourse (url) {
    const res = await fetch(`${this._apiBase}${url}`);

    if(res.ok) {
      // достанем тело ответа
      const data = await res.text();
      return data;
    } else {
      return 'Введите корректные данные'
    }
  }

  getNumberInfo(number) {
    return this.getResourse(`/${number}/math`)
  }

  getDateInfo(date) {
    return this.getResourse(`/${date}/date`)
  }

  getYearInfo(year) {
    return this.getResourse(`/${year}/year`)
  }




}

// const numbersapi = new NumbersapiService();

// numbersapi.getNumberInfo('5')
//   .then((body) => console.log('getNumberInfo ',body))

// numbersapi.getDateInfo('5')
// .then((body) => console.log('getDateInfo ',body))

// numbersapi.getYearInfo('5')
// .then((body) => console.log('getYearInfo',body))

// fetch('http://numbersapi.com/5/math')
// .then((res) => res.text())
// .then((data) => console.log(data))

// const getResourse = async function getData(url) {
//   try {
//     // await или мы будем ждать пока рез-т промиса н будет доступен
//     // когда рез-т досткпен - записываем его в переменную response
//     const response = await fetch(url);
//     if(response.ok) {
//       // достанем тело ответа
//       const data = await response.text();
//       return data;
//     } else {
//       return 'Введите корректные данные'
//     }
//   } catch (error) {
//     console.log('Fetch Error :-S', error); 
//     return null;
//   }
// }
// getResourse('http://numbersapi.com/5/math')
//   .then((data) => console.log(data))