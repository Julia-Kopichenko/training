export default function  createYearPage(app) {
    app.innerHTML = `
      <div class="container">
          <section class="second-page">
              <p class="title">Please enter the <span class="second-word">year</span></p>
              <div class="form">
                  <input type="number" class="input" placeholder="year">
                  <button class="button button-submit">surprise me</button>
              </div>
              <div class="output"></div>
          </section>
      </div>
    `
}