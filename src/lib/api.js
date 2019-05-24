const API = 'http://api.tvmaze.com';

// eslint-disable-next-line import/prefer-default-export
export function searchForShows(query) {
  return fetch(`${API}/search/shows?q=${query}`);
}
