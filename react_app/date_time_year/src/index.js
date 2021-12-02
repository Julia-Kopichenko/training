import React from 'react';
import ReactDOM  from 'react-dom';

import App from './components/App';

// import NumbersapiService from './services/NumbersapiService'

ReactDOM.render(<App />, document.getElementById('root'));



// const numbersapi = new NumbersapiService();

// numbersapi.getNumberInfo('5')
//   .then((body) => console.log('getNumberInfo ',body))

// numbersapi.getDateInfo('5')
// .then((body) => console.log('getDateInfo ',body))

// numbersapi.getYearInfo('5')
// .then((body) => console.log('getYearInfo',body))