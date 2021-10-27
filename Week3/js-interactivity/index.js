let addMovie = (event) => {
    let inputField = document.querySelector("input"); 

    let movie = document.createElement('Li');

    let movieTitle = document.createElement('span');

    movieTitle.textContent= inputField.value;

};

