// USE WITH FIREBASE AUTH
// import ViewDirectorBasedOnUserAuthStatus from '../utils/viewDirector';
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';
import getRequest from '../api/Promises';

const htmlStructure = () => {
  document.querySelector('#app').innerHTML = `
  <h1>Joke Generator</h1>
  <div id="getJoke">
  <span id="setup"></span>
  <span id="punchline"  class= "hidden"></span>
  </div>
  <button type="button" id="get-joke" class="btn-primary">Get Joke</button>
   <button type="button" id="get-punchline" class="btn-primary hidden" >Get punchline</button>
  `;
};

const events = () => {
  document.querySelector('#get-joke').addEventListener('click', () => {
    getRequest().then((response) => {
      document.querySelector('#setup').innerHTML = `<span>${response.setup}</span>`;
      document.querySelector('#punchline').innerHTML = `<span  >${response.delivery}</span>`;
      document.querySelector('#get-punchline').classList.remove('hidden');
      document.querySelector('#get-joke').classList.add('hidden');
      document.querySelector('#punchline').classList.add('hidden');
      document.querySelector('#get-punchline').innerHTML = 'get-punchline';
      console.warn(response.setup);
      console.warn(response.delivery);
    });
    console.warn('Hey There !!');
  });
  document.querySelector('#get-punchline').addEventListener('click', () => {
    document.querySelector('#punchline').classList.remove('hidden');
    document.querySelector('#get-punchline').classList.add('hidden');
    document.querySelector('#get-joke').classList.remove('hidden');
  });
};
const startApp = () => {
  htmlStructure();
  events();
};

startApp();
