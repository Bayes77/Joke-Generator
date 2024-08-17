// USE WITH FIREBASE AUTH
// import ViewDirectorBasedOnUserAuthStatus from '../utils/viewDirector';
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';
import getRequest from '../api/Promises';

const htmlStructure = () => {
  document.querySelector('#app').innerHTML = `
  <h1>Joke Generator</h1>
  <button type="button" id="get-joke" class="btn-primary">Get Joke</button>
  `;
};

const events = () => {
  document.querySelector('#get-joke').addEventListener('click', () => {
    getRequest().then((response) => {
      console.warn(response.setup);
      console.warn(response.delivery);
    });
    console.warn('Hey There !!');
  });
};
const startApp = () => {
  htmlStructure();
  events();
};

startApp();
