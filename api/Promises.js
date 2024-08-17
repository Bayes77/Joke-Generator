const jokeEndPoint = 'https://v2.jokeapi.dev/joke/Dark?blacklistFlags=nsfw,religious,political,racist,sexist,explicit';

const getRequest = () => new Promise((resolve, reject) => {
  fetch(jokeEndPoint, {
    method: 'GET',
    header: {
      'Content-Type': 'application/json',
    },
  })
    .then((Response) => Response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

export default getRequest;
