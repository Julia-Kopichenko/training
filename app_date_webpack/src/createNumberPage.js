export default function  createNumberPage(app) {
  app.innerHTML = `
    <div class="container">
        <section class="second-page">
            <p class="title">Please enter the <span class="second-word">number</span></p>
            <div class="form">
                <input type="number" class="input" placeholder="number">
                <button class="button button-submit">surprise me</button>
            </div>
            <div class="output"></div>
        </section>
    </div>
  `
}