import createDatePage from "./createDatePage";
import createNumberPage from "./createNumberPage";
import createYearPage from "./createYearPage";

export default function addEventListenerToBtn(buttons,app) {

  [...buttons].forEach((elem) => {

    elem.addEventListener('click',(event) => {

      event.preventDefault();
      let href = event.target.getAttribute('href');

      switch (href) {
        case '/date': 
          createDatePage(app)
          history.pushState(null, null, href);
        break
        case '/number': 
          createNumberPage(app)
          history.pushState(null, null, href);
        break
        case '/year': 
          createYearPage(app)
          history.pushState(null, null, href);
        break
        default:
          createMainPage(app)
          history.pushState(null, null, '/');
      }
    })
  })
}

