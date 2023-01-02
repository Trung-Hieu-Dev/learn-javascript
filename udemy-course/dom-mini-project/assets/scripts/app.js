const addMovieModal = document.getElementById('add-modal');
const startAddMovieBtn = document.querySelector('header button');

const toggleMovieModal = () => {
    addMovieModal.classList.toggle('visible');
}

startAddMovieBtn.addEventListener('click', toggleMovieModal);