// Import della librerie
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import _ from 'lodash';

// Dichiarazioni costanti
const btn = document.getElementById('search-button');
const categories = document.getElementById('categories');
const score = document.getElementById('score');
const summ = document.getElementById('summary');

btn.addEventListener('click', function () {
  const cityName = _.trim(_.toLower(document.getElementById('city-input').value));
  if (!cityName) {
    alert('Insert city!')
    return
  }
  // Chiamata API
  axios.get(`https://api.teleport.org/api/urban_areas/slug:${cityName}/scores/`)
    .then(function (response) {
      categories.innerHTML = "";
      summ.innerHTML = response.data.summary;

      const categoriesList = document.getElementById('categories')
      _.forEach(response.data.categories, (category) => {
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item';
        listItem.innerHTML = `${category.name}: ${category.score_out_of_10.toFixed(2)}`;
        categoriesList.appendChild(listItem);
      });
      summ.innerHTML = response.data.summary;
      score.innerHTML = `Total score: ${response.data.teleport_city_score.toFixed(2)}`;
    })

    .catch(function (error) {
      categories.style.display = 'none';
      score.style.display = 'none';
      summ.style.display = 'block';
      summ.innerHTML = `The name of the city entered must be in English, 
        or you have entered a city not present in our database, sorry!`;
      console.error('Errore durante la richiesta API', error);
    });
  document.getElementById('city-input').value = '';
})