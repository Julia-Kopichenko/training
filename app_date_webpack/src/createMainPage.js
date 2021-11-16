import addEventListenerToBtn from "./addEventListener";

export default function createMainPage(app) {
  app.innerHTML = `
    <div class="container">
        <section class="main-page">
            <h1 class="main-page__title title">Make your choice</h1>
            <p class="main-page__subtitle subtitle">...if you want to know something interesting ;)</p>
            <div class="nav">
                <a href="/date" class="button button-date" >date</a>
                <a href="/number" class="button button-number">number</a>
                <a href="/year" class="button button-year">year</a>
            </div>
        </section>
    </div>
  `
  const buttons = document.getElementsByClassName('button')
  addEventListenerToBtn(buttons,app)
}
