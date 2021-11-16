export default function  createDatePage(app) {
    app.innerHTML = `
        <div class="container">
            <section class="second-page">
                <p class="title">Please enter the <span class="second-word">date</span></p>
                <div class="form">
                    <input type="text" class="input" placeholder="date">
                    <button class="button button-submit" href="#">surprise me</button>
                </div>
                <div class="output"></div>
            </section>
        </div>
    `
}