import './styles/style.scss';

import locationResolver from './locationResolver';

window.addEventListener("load", () => {
  console.log('start');
  const app = document.querySelector('#app');

  const location = window.location.pathname;

  locationResolver(location,app)

  if (location) {
    locationResolver(location,app)
  }
})

// window.onpopstate = function () {
//   console.log('done');

//   const app = document.querySelector('#app');
//   const location = window.location.hash;

//   locationResolver(location,app)
// }