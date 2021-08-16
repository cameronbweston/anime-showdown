const BASE_URL = '/api/anime/'

export function searchAnime(title) {
  return fetch(`${BASE_URL}searchAnime/${title}`)
  .then(res => res.json())
}

export function getRandomShowsForGameStart() {
  return fetch(`${BASE_URL}getRandomShowsForGameStart`)
  .then(res => res.json())
}

export function addToUserCollection() {
  //Pass in variable to decide if it will be saved to user collection 'want to watch', 'watching', or 'will watch'
}
