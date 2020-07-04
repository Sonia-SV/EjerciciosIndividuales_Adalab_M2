'use strict';

//EJERCICIO 4

const btn = document.querySelector('.js-btn');

function getInfo() {
  const input = document.querySelector('.js-input').value;

  fetch(`https://api.github.com/orgs/${input}`)
    .then((response) => response.json())
    .then((data) => {
      const repos = data.repos_url;
      return fetch(repos);
    })
    .then((repoResponse) => repoResponse.json())
    .then((repoData) => {
      const list = document.querySelector('.js-list');
      let listContent = '';

      for (const repo of repoData) {
        const repoName = `<li>${repo.name}</li>`;
        listContent += repoName;
      }
      list.innerHTML = listContent;
    });
}

btn.addEventListener('click', getInfo);
listContent += repoName;
