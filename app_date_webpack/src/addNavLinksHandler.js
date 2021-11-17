import createDatePage from "./createDatePage";
import createNumberPage from "./createNumberPage";
import createYearPage from "./createYearPage";

import addButtonSubmitHandler from "./addButtonSubmitHandler";

import locationResolver from "./locationResolver";

export default function addNavLinksHandler(buttons,app) {

  [...buttons].forEach((elem) => {

    elem.addEventListener('click',(event) => {

      event.preventDefault();
      let location = event.target.getAttribute('href');
      locationResolver(location,app)
    })
  })
}

