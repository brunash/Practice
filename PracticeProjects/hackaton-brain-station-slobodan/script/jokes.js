const button = document.createElement("button")
button.addEventListener("click",getJoke)
button.classList.add("button")
    button.innerText = "KNEE SLAPPERS..."
function getJoke(){
axios.get('https://icanhazdadjoke.com/', { headers: { "Accept": "text/plain" },})
.then((response) => {
    console.log(response.data.joke)
    let joke = response.data
    const jokeContainer = document.querySelector(".container")
    
    
    
    jokeContainer.removeChild(jokeContainer.childNodes[0]);

    const jokeText = document.createElement("p")
    jokeText.classList.add("joke")
    jokeText.innerText = joke
   
    jokeContainer.appendChild(jokeText);
    jokeContainer.appendChild(button);
})
.catch((error) => {
    const jokeText = document.querySelector(".joke")
    jokeText.innerText = "Jokes are on vacation :("
})}
getJoke();


if (window.confirm('Are you over 18?')) {
    window.open
} else {
    window.open("https://www.youtube.com/watch?v=LK3C9IytrLI")
}