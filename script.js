let thumbs;
let dialogRef;

//array for the imgages

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

//initialised the elements for the html

function init() {
    thumbs = document.getElementById('thumbs');
    dialogRef = document.getElementById('imagePopup');

    renderImages();
}

//create the template for the thumbs

function getImagesTemplate(i) {
    return `
        <div class="thumb-box">
            <img 
                class="thumb"
                src="${images[i].src}"
                alt="${images[i].alt}"
                onclick="openDialog(${i})"
                onkeydown="handleKeyPress(event, ${i})"
                tabindex="0"
                >
        </div>
    `;
}

//render the img's for the thumbs

function renderImages() {
    let getImages = "";

    for (let i = 0; i < images.length; i++) {
        getImages += getImagesTemplate(i);
    }

    thumbs.innerHTML = getImages;
}

//open dialog

function openDialog(i) {
    currentIndex = i;
    popupImg.src = images[i].src;
    popupImg.alt = images[i].alt;
    dialogRef.showModal();
    document.body.classList.add('no-scroll');
    showPopupTitle();
    showImageNumber();
}

//open dialog with space or enter

function handleKeyPress(event, index) {
    if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openDialog(index); 
    }
}

//show alt text as title in dialog

function showPopupTitle() {
    let popupTitle = popupImg.alt;
    let output = document.getElementById('imgTitle');

    output.innerHTML = popupTitle;
}

//show actual number between button

function showImageNumber() {
    let actualImage = currentIndex + 1;
    let maxImages = images.length;
    let output = actualImage + "/" + maxImages;

    document.getElementById('imageNumber').innerHTML = output;
}

//open previous image

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

//open next image

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

//close dialog

function closeDialog() {
    dialogRef.close();
    document.body.classList.remove('no-scroll');
}

//close dialog with outside click

function handleDialogClick(event) {
    if (event.target.id === 'imagePopup') {
        closeDialog();
    }
}
