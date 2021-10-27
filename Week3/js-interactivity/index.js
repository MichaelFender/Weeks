let addMovie = (event) => {

    event.preventDefalt();
    
    let inputField = document.querySelector("input"); 

    let movie = document.createElement('Li');

    let movieTitle = document.createElement('span');

    movieTitle.textContent = inputField.value;

    movie.appendChild(movieTitle);

    let list = document.querySelector('ul');

    list.appendChild(movie);
};

let form = document.querySelector("form");

form.addEventListener("submit", addMovie);

