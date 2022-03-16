console.log("hello world")

function addMovie(event) {
    event.preventDefault()
    const inputField = document.querySelector("input")
    const movie = document.createElement("li")
    const movieTitle = document.createElement("span")
    movieTitle.textContent = inputField.value
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
}

