const usersList = document.querySelector('.users')
const requestURL = 'https://reqres.in/api/users?page=1';

async function getUsers(url) {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const {data: users} = await response.json();
      return users;
    } else {
      console.log('Fetch Error :-S', err);  
      return null;
    }
  } catch (error) {
    console.log('Fetch Error :-S', err);  
    return null;
  }
}

async function createUsersCards(response) {
  let users = await response;
  if (!users) {
    usersList.innerText = "Error, can't get data from server"
    return
  }
  users.forEach(element => {
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
createUsersCards(getUsers(requestURL))
