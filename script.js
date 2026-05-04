let thumbs;
let dialogRef;

let images = [
    {
        src: './assets/images/bisons.jpeg',
        alt: 'Bisons'
    },
    {
        src: './assets/images/bryce_canyon.jpg',
        alt: 'Bryce Canyon'
    },
    {
        src: './assets/images/cars.jpg',
        alt: 'Route66'
    },
    {
        src: './assets/images/death_valley.jpg',
        alt: 'Death Valley'
    },
    {
        src: './assets/images/flight_over_grand_canyon.jpg',
        alt: 'Flug über dem Grand Canyon'
    },
    {
        src: './assets/images/grand_canyon_sundown.jpeg',
        alt: 'Sonneruntergang am Grand Canyon'
    },
    {
        src: './assets/images/grand_canyon.jpg',
        alt: 'Grand Canyon'
    },
    {
        src: './assets/images/monument_valley.jpg',
        alt: 'Monument Valley'
    },
    {
        src: './assets/images/riding.jpeg',
        alt: 'Motorrad fahren'
    },
    {
        src: './assets/images/river.jpeg',
        alt: 'Fluss'
    },
    {
        src: './assets/images/san_francisco.jpg',
        alt: 'San Francisco'
    },
    {
        src: './assets/images/yoshua_tree.jpeg',
        alt: 'Yoshua Tree Nationalpark'
    }];

function init() {
    thumbs = document.getElementById('thumbs');
    dialogRef = document.getElementById('imagePopup');

    renderImages();
}

function renderImages() {
    let getImages = "";

    images.forEach((item, index) => {
        const li = document.createElement("li");

        li.className = "thumb";

        li.onclick = () => {
            openDialog(index);
        };

        li.innerHTML = `<img src="${item.src}" alt="${item.alt}">`;
        thumbs.appendChild(li);
    });
}

function openDialog(i) {
    currentIndex = i;
    popupImg.src = images[i].src;
    popupImg.alt = images[i].alt;
    dialogRef.showModal();
    showPopupTitle();
    showImageNumber();
}

function showPopupTitle() {
    let popupTitle = popupImg.alt;
    let output = document.getElementById('imgTitle');

    output.innerHTML = popupTitle;
}

function showImageNumber() {
    let actualImage = currentIndex + 1;
    let maxImages = images.length;
    let output = actualImage + "/" + maxImages;

    document.getElementById('imageNumber').innerHTML = output;
}

function nextImage() {
    currentIndex = currentIndex + 1;

    if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    popupImg.src = images[currentIndex].src;
    popupImg.alt = images[currentIndex].alt;

    showPopupTitle();
    showImageNumber();
}

function prevImage() {
    currentIndex = currentIndex - 1;

    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }

    popupImg.src = images[currentIndex].src;
    popupImg.alt = images[currentIndex].alt;

    showPopupTitle();
    showImageNumber();
}

function closeDialog() {
    dialogRef.close();
}