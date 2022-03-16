console.log("hello world")

const message = document.querySelector("#message")

function addMovie(event) {
    event.preventDefault()
    const inputField = document.querySelector("input")
    const movie = document.createElement("li")
    const movieTitle = document.createElement("span")
    movieTitle.textContent = inputField.value
    movieTitle.addEventListener("click", crossOffMovie)
    movie.appendChild(movieTitle)
    document.querySelector("ul").appendChild(movie)
    const deleteBtn = document.createElement("button")
    deleteBtn.textContent = "X"
    deleteBtn.addEventListener("click", deleteMovie)
    movie.appendChild(deleteBtn)
    
}

document.querySelector('form').addEventListener('submit', addMovie)

function deleteMovie(event) {
    event.target.parentNode.remove()
    message.textContent = "Movie Deleted!"
}

function crossOffMovie(event) {
    event.target.classList.toggle("checked")
}