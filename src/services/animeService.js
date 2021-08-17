const BASE_URL = '/api/anime/'

export function searchAnime(title) {
  return fetch(`${BASE_URL}searchAnime/${title}`)
  .then(res => res.json())
}

export async function getRandomShowsForGameStart() {
  return fetch(`${BASE_URL}getRandomShowsForGameStart`)
  .then(res => res.json())
  // console.log(data)
  // return await data.json()
}

export function addToUserCollection() {
  //Pass in variable to decide if it will be saved to user collection 'want to watch', 'watching', or 'will watch'
}
