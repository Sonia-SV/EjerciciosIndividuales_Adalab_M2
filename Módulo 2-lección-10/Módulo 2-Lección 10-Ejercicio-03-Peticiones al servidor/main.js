'use strict';
//EJERCICIO 3
const resultados = document.querySelector('.js-result');
const searched = document.querySelector('.js-user');
const button = document.querySelector('.js-search-button');

function searchUser() {
  let user = searched.value;
  fetch(`https://api.github.com/users/${user}`)
    .then((response) => response.json())
    .then((data) => {
      let name = data.login;
      let picture = data.avatar_url;
      let number = data.public_repos;
      return (resultados.innerHTML = `<h2>Resultados</h2> <h3> Nombre</h3> <p>${name}</p> <h3> Foto</h3> <img src="${picture}"> <h3> Nombre</h3> <p>${number}</p>`);
    });
}

button.addEventListener('click', searchUser);
