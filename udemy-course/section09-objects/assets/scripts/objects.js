const addMovieBtn = document.getElementById('add-movie-btn');
const searchBtn = document.getElementById('search-btn');

const movies = [];

const renderMovies = () => {
    const moviesList = document.getElementById('movie-list');

    if (moviesList === 0) {
        moviesList.classList.remove('visible');
        return;
    } else {
        moviesList.classList.add('visible');
    }

    moviesList.innerHTML = '';

    movies.forEach((movie) => {
        const movieEl = document.createElement('li');
        // movieEl.textContent = movie.info.title;
        let text = movie.info.title + ' - ';
        for (const key in movie.info) {
            if (key !== 'title') {
                text = text + `${key}: ${movie.info[key]}`;
            }
        }
        movieEl.textContent = text;
        moviesList.append(movieEl);
    });
}

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
            [extraName]: extraValue
        },
        id: Math.random()
    }

    movies.push(newMovie);

    renderMovies();

    console.log(movies);
}

addMovieBtn.addEventListener('click', addMovieHandler);