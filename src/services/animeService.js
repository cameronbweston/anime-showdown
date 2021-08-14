const BASE_URL = '/api/anime'

export function search(type, query) {

}

export function getRandomShowsForGameStart() {

}

export function addToUserCollection() {
  //Pass in variable to decide if it will be saved to user collection 'want to watch', 'watching', or 'will watch'
}

/* 
    Define the config we'll need for our Api request
    var url = 'https://graphql.anilist.co',
      options = {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
          },
          body: JSON.stringify({
              query: query,
              variables: variables
          })
      };

    Make the HTTP Api request
    fetch(url, options).then(handleResponse)
                      .then(handleData)
                      .catch(handleError);

    function handleResponse(response) {
      return response.json().then(function (json) {
          return response.ok ? json : Promise.reject(json);
      });
    }

    function handleData(data) {
      console.log(data);
    }

    function handleError(error) {
      alert('Error, check console');
      console.error(error);
    }
*/