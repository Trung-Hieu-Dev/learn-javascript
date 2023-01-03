const addMovieModal = document.getElementById('add-modal');
const startAddMovieBtn = document.querySelector('header button');
const backdrop = document.getElementById('backdrop');
const cancelMovieBtn = addMovieModal.querySelector('.btn--passive');
const confirmAddMovieBtn = cancelMovieBtn.nextElementSibling;
const userInputs = addMovieModal.querySelectorAll('input');
const entryTextSection = document.getElementById('entry-text');
const deleteMovieModal = document.getElementById('delete-modal');


const movies= [];

const updateUi = () => {
    if(movies.length === 0) {
        entryTextSection.style.display = 'block';
    } else {
        entryTextSection.style.display = 'none';
    }
}

const renderNewMovieElement = (id, title, imageUrl, rating) => {
    const newMovieElement = document.createElement('li'); //create new element
    newMovieElement.className = 'movie-element'; //add css class
    //add content to new element
    newMovieElement.innerHTML = `
        <div class="movie-element__image">
            <img src="${imageUrl}" alt="${title}">
        </div>
        <div class="movie-element__info">
            <h2>${title}</h2>
            <p>${rating} / 5 stars</p>
        </div>
    `;

    newMovieElement.addEventListener('click', deleteMovieHandler.bind(null, id));

    const listRoot = document.getElementById('movie-list'); //specify list
    listRoot.append(newMovieElement); //add new element to list

}

const toggleBackdrop = () => {
    backdrop.classList.toggle('visible');
}

const closeMovieModal = () => {
    addMovieModal.classList.remove('visible');
}

const showMovieModal = () => {
    addMovieModal.classList.add('visible');
    toggleBackdrop();
}

const backdropClickHandler = () => {
    closeMovieModal();
    closeMovieDeletionModal();
    clearUserInput();
}

const cancelAddMovieHandler = () => {
    closeMovieModal();
    toggleBackdrop();
    clearUserInput();

}

const addMovieHandler = () => {
    const titleValue = userInputs[0].value;
    const imageUrlValue = userInputs[1].value;
    const ratingValue = userInputs[2].value;

    if(
        titleValue.trim() === '' || 
        imageUrlValue === '' || 
        ratingValue === '' ||
        +ratingValue < 1 || //add + to convert string to number
        +ratingValue > 5
    ) {
        alert('Please enter valid values (rating between 1 and 5).')
    }

    const newMovie = { //create new movie
        id: Math.random().toString(),
        title: titleValue,
        image: imageUrlValue,
        rating: ratingValue
    };
    movies.push(newMovie); //create new data store
    console.log(movies);

    closeMovieModal();

    toggleBackdrop();

    clearUserInput(); //reset input fields

    renderNewMovieElement(newMovie.id ,newMovie.title, newMovie.image, newMovie.rating); //create list

    updateUi(); //update UI
}

const clearUserInput = () => {
    // userInputs[0].value = '',
    // userInputs[1].value = '',
    // userInputs[2].value = ''
    for(const usrInput of userInputs) {
        usrInput.value = '';
    }
}


const closeMovieDeletionModal = () => {
    toggleBackdrop();
    deleteMovieModal.classList.remove('visible');

}

const deleteMovie = (movieId) => {
    let movieIndex = 0;
    for (const movie of movies) {
        if (movie.id === movieId) {
            break;
        }
        movieIndex++;
    }
    movies.slice(movieIndex, 1);
    const listRoot = document.getElementById('movie-list');
    listRoot.children[movieIndex].remove();
    closeMovieDeletionModal();
    updateUi();

}

const deleteMovieHandler = (movieId) => {
    deleteMovieModal.classList.add('visible');
    toggleBackdrop();

    const cancelDeletionBtn = deleteMovieModal.querySelector('.btn--passive');
    let confirmDeletionBtn = deleteMovieModal.querySelector('.btn--danger');

    confirmDeletionBtn.replaceWith(confirmDeletionBtn.cloneNode(true));
    confirmDeletionBtn = deleteMovieModal.querySelector('.btn--danger');


    // confirmDeletionBtn.removeEventListener('click', deleteMovie.bind(null, movieId)); 
    cancelDeletionBtn.removeEventListener('click', closeMovieDeletionModal);


    cancelDeletionBtn.addEventListener('click', closeMovieDeletionModal);
    confirmDeletionBtn.addEventListener('click', deleteMovie.bind(null, movieId));
}

startAddMovieBtn.addEventListener('click', showMovieModal);
backdrop.addEventListener('click', backdropClickHandler);
cancelMovieBtn.addEventListener('click', cancelAddMovieHandler);
confirmAddMovieBtn.addEventListener('click', addMovieHandler);
