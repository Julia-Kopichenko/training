export default function showDataFromServer(data) {
  let output = document.querySelector('.output');

  if (!data) {
    output.innerText = "Error, can't get data from server"
    return
  }
  
  output.classList.add("visible")
  output.innerHTML = data;
}