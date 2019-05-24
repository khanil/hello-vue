const API = 'https://api.tvmaze.com';

export function searchForShows(query) {
  return fetch(`${API}/search/shows?q=${query}`);
}

export function fetchShow(id) {
  return fetch(`${API}/shows/${id}`);
}
