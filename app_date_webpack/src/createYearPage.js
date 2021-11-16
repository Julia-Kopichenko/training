export default function  createYearPage(app) {
  console.log('createYearPage');
    app.innerHTML = `
      <div class="container">
          <section class="second-page">
              <p class="title">Please enter the <span class="second-word">year</span></p>
              <div class="form">
                  <input type="text" class="input" placeholder="year">
                  <button class="button button-submit" href="#">surprise me</button>
              </div>
              <div class="output"></div>
          </section>
      </div>
    `
}