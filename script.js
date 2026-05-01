let images = ["./assets/images/bisons.jpeg",
"./assets/images/bryce_canyon.jpg",
"./assets/images/cars.jpg",
"./assets/images/death_valley.jpg",
"./assets/images/flight_over_grand_canyon.jpg",
"./assets/images/grand_canyon_sundown.jpeg",
"./assets/images/grand_canyon.jpg",
"./assets/images/monument_valley.jpg",
"./assets/images/riding.jpeg",
"./assets/images/river.jpeg",
"./assets/images/san_francisco.jpg",
"./assets/images/yoshua_tree.jpeg"];

const thumbs = document.getElementById('thumbs');

function renderImages() {
    let getImages = "";
    for (let i = 0; i < images.length; i++) {
        getImages += `<li><img class= thumb src="${images[i]}" alt="Galeriebild"></li>` 
    }
    thumbs.innerHTML = getImages;
    
}

renderImages();
    
