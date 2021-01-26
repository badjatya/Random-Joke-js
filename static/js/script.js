let joke = document.querySelector("#joke");
let jokeBtn = document.querySelector("#jokeBtn");

const genrateJokes = async () => {

    try{
        const setHeader = {
            headers: {
                Accept: "application/json"
            }
        }
    
        //Method 1
        // fetch("https://icanhazdadjoke.com/" , setHeader)
        // .then((response) => response.json())
        // .then((data) => joke.innerHTML = data.joke)
        // .catch((error) => console.log(error))
    
        //Method 2               
        const response = await fetch("https://icanhazdadjoke.com/" , setHeader);
        const data = await response.json();
        joke.innerHTML = data.joke;
    }catch(error) {
        console.log(`The Error is ${error}`);
    }
    

}

jokeBtn.addEventListener("click",genrateJokes);
// genrateJokes();