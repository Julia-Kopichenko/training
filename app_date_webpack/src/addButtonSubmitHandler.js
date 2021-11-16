
import getData from "./getDataFromServer";
import showDataFromServer from "./showDataFromServer";

export default function addButtonSubmitHandler(location) {
  const buttonSubmit = document.querySelector('.button-submit');

  buttonSubmit.addEventListener('click', () => {
    let inputValue,url;

    switch(location) {
      case '/date':
        inputValue = document.querySelector('input').value;
        url = `http://numbersapi.com/${inputValue}/date`
        getData(url)
        .then(showDataFromServer)
      break
      case '/number':
          inputValue = document.querySelector('input').value;
          url = `http://numbersapi.com/${inputValue}`
          getData(url)
          .then(showDataFromServer)
        break
      case '/year':
          inputValue = document.querySelector('input').value;
          url = `http://numbersapi.com/${inputValue}/year`
          getData(url)
          .then(showDataFromServer)
        break
    }
  })
}



 