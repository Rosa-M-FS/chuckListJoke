const boton = document.getElementById("fetchJoke");
const listaChistes = document.getElementById("jokeList");
document.addEventListener("DOMContentLoaded", () => {
    const savedJokes = JSON.parse(localStorage.getItem("jokes"));
    savedJokes.forEach(joke => addJokeList(joke));
});
boton.addEventListener("click", () => {
    fetch("https://api.chucknorris.io/jokes/random")
    .then(response => response.json())
    .then((data) => {
        addJokeList(data.value);
        saveJokeToLocalStorage(data.value);
    })
});
function addJokeList(joke) {
    const jokeItem = document.createElement('li');
    jokeItem.innerHTML = `
        ${joke}
        <button>Eliminar</button>
    `;
    listaChistes.appendChild(jokeItem);
}
function saveJokeToLocalStorage(joke) {
    const savedJokes = JSON.parse(localStorage.getItem("jokes"))||[];
    savedJokes.push(joke);
    localStorage.setItem("jokes", JSON.stringify(savedJokes));
}