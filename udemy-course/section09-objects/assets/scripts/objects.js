const addMovieBtn = document.getElementById('add-movie-btn');
const searchBtn = document.getElementById('search-btn');

const movies = [];

//render list
const renderMovies = (filter = '') => {
  const moviesList = document.getElementById('movie-list');

  if (moviesList === 0) {
    moviesList.classList.remove('visible');
    return;
  } else {
    moviesList.classList.add('visible');
  }

  moviesList.innerHTML = '';

  const filteredMovies = !filter
    ? movies
    : movies.filter((movie) => movie.info.title.includes(filter));

  filteredMovies.forEach((movie) => {
    const movieEl = document.createElement('li');

    const { info } = movie;
    const {title: movieTitle} = info; //const {title} = info; use this in case don't rename

    let text = movieTitle + ' - ';
    for (const key in info) {
      if (key !== 'title') {
        text = text + `${key}: ${movie.info[key]}`;
      }
    }
    movieEl.textContent = text;
    moviesList.append(movieEl);
  });
};

//add movie
const addMovieHandler = () => {
  const title = document.getElementById('title').value;
  const extraName = document.getElementById('extra-name').value;
  const extraValue = document.getElementById('extra-value').value;

  if (
    title.trim() === '' ||
    extraName.trim() === '' ||
    extraValue.trim() === ''
  ) {
    return;
  }

  const newMovie = {
    info: {
      title,
      [extraName]: extraValue,
    },
    id: Math.random(),
  };

  movies.push(newMovie);

  renderMovies();
};

//search movie
const searchMovieHandler = () => {
  const filterTerm = document.getElementById('filter-title').value;
  renderMovies(filterTerm);
};

addMovieBtn.addEventListener('click', addMovieHandler);
searchBtn.addEventListener('click', searchMovieHandler);
