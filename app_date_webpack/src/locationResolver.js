import createDatePage from "./createDatePage";
import createNumberPage from "./createNumberPage";
import createYearPage from "./createYearPage";
import createMainPage from "./createMainPage";
import addButtonSubmitHandler from "./addButtonSubmitHandler";


export default function locationResolver(location,app) {
  switch (location) {
    case '/date': 
      createDatePage(app)
      addButtonSubmitHandler(location)
      history.pushState(null, null, location);
    break
    case '/number': 
      createNumberPage(app)
      addButtonSubmitHandler(location)

      history.pushState(null, null, location);
    break
    case '/year': 
      createYearPage(app)
      addButtonSubmitHandler(location)

      history.pushState(null, null, location);
    break
    default:
      createMainPage(app)
      history.pushState(null, null, '/');
  }
}
