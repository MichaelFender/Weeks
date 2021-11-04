const starContainer = document.querySelector("#push");

let baseURL = "https://swapi.dev";

function createStarCard(star) {
    const starCard = document.createElement("h3");
    const starUrl = document.createElement("div");
    starCard.innerHTML = `${star.name}`;
    starUrl.innerHTML = `<a href=${star.url}>View ${star.name} data!</a>`;

    starContainer.appendChild(starCard);
    starContainer.appendChild(starUrl);
}

function displayStar(arr) {
    console.log(arr);
    starContainer.innerHTML = ``;
    for (let i = 0; i < arr.length; i++) {
        createStarCard(arr[i]);
    }
}

const starCallback = ({ data: pokemon }) =>
    displayStar(pokemon.pokemon_species);

let starPerson = "blue";

const getAllStar = () =>
    axios
        .get(`${baseURL}/api/v2/pokemon-color/${starPerson}`)
        .then(starCallback)
        .catch((err) => {
            console.log(err);
        });

getAllStar();
