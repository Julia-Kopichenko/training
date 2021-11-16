import createDatePage from "./createDatePage";
import createNumberPage from "./createNumberPage";
import createYearPage from "./createYearPage";
import createMainPage from "./createMainPage";

export default function locationResolver(location,app) {
  switch(location) {
    case '/date':
      createDatePage(app)
      break
    case '/number':
      createNumberPage(app)
      break
    case '/year':
      createYearPage(app)
      break
    default: 
      createMainPage(app)
      history.pushState(null, null, '/');
  }
}