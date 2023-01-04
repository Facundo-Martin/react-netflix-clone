const API_KEY = "c3fe1e46c1641d9615da570317ec7344";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/movie/top_rated?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `discover/movie?api_key=${API_KEY}&withgenres=28`,
  fetchComedyMovies: `discover/movie?api_key=${API_KEY}&withgenres=35`,
  fetchHorrorMovies: `discover/movie?api_key=${API_KEY}&withgenres=27`,
  fetchRomanceMovies: `discover/movie?api_key=${API_KEY}&withgenres=10749`,
  fetchDocumentaries: `discover/movie?api_key=${API_KEY}&withgenres=99`,
};

export default requests;
