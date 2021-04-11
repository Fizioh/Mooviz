const API_TOKEN = process.env.REACT_APP_GOOGLE_API_KEY

export function getFilmsFromApiWithSearchedText (text) {
    const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + text
    return fetch(url) 
    .then((response) => response.json())
    .catch((error) => console.error(error))
}