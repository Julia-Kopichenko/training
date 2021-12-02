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

  getInfo(name, value) {
    if(name==='number') return this.getNumberInfo(value)
    if(name==='date') return this.getDateInfo(value)
    if(name==='year') return this.getYearInfo(value)
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

