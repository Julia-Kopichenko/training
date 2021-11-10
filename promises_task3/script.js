const usersList = document.querySelector('.users')
const requestURL = 'https://reqres.in/api/users?page=1';

async function getData(url) {
  try {
    const response = await fetch(url);
    const {data} = await response.json();
    return data;
  } catch (error) {
    console.log('Fetch Error :-S', err);  
    return null;
  }
}

function createUsersCards(data) {
  if (!data) {
    usersList.innerText = "Error, can't get data from server"
    return
  }
  data.forEach(element => {
    const {first_name: name, email, avatar} = element;
    let user = document.createElement('li');
    user.classList.add('user');
    user.innerHTML = `
      <p class = 'user__name'>${name}</p>
      <p class = 'user__email'>${email}</p>
      <img src = ${avatar} alt='${name}' class='user__photo'>
    `;
    usersList.appendChild(user) 
  });
}

getData(requestURL)
  .then(createUsersCards)

//! Вариант 2
// function createUsersCards(url) {
//   fetch(url)
//     .then(response => response.json())
//     .then(({data:users}) => {
//       users.forEach(element => {
//         const {first_name: name, email, avatar} = element;
//         let user = document.createElement('li');
//         user.classList.add('user');
//         user.innerHTML = `
//           <p class = 'user__name'>${name}</p>
//           <p class = 'user__email'>${email}</p>
//           <img src = ${avatar} alt='${name}' class='user__photo'>
//         `;
//         usersList.appendChild(user) 
//       });
//     })
//     .catch(() => usersList.innerText = "Error, can't get data from server")
// }

// createUsersCards(requestURL)