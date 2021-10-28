let message = document.querySelector("#message")

let addMovie = (event) => {

    event.preventDefault();
    
    let inputField = document.querySelector("input"); 

    let movie = document.createElement('Li');

    let movieTitle = document.createElement('span');

    movieTitle.textContent = inputField.value;

    movieTitle.addEventListener("click", crossOffMovie);

    movie.appendChild(movieTitle);

    let deleteBtn = document.createElement("button");

    deleteBtn.textContent = "x";

    deleteBtn.addEventListener("click", deleteMovie);

    movie.appendChild(deleteBtn);

    let list = document.querySelector('ul');

    list.appendChild(movie);

    inputField.value = "";

};

let form = document.querySelector("form");

form.addEventListener("submit", addMovie);

let deleteMovie = (event) => {

    event.target.parentNode.remove();

    message.textContent = `${event.target.parentNode.firstChild.textContent} Deleted`;
    console.log(event.target.parentNode);

    revealMessage();

};

let crossOffMovie = (event) => {

    event.target.classList.toggle("checked");

    if (event.target.classList.contains("checked")){
        message.textContent = `${event.target.textContent} Watched!`;
    }else{
        message.textContent = `${event.target.textContent} added back!`;
}

    revealMessage();

};

let revealMessage = () => {

    message.classList.remove("hide");

    setTimeout(()=> {
        message.classList.add("hide");
    } , 1000)

}

