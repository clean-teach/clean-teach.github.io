const images = ["anna-jahn-v1UKZ55xl7g-unsplash.jpg", "julien-riedel-PDaNXnMEfGo-unsplash.jpg", "luka-senica-mvKaZllalAQ-unsplash.jpg", "eberhard-grossgasteiger-bnqdK7zvm4Y-unsplash.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;
bgImage.classList.add('bgImg');

document.body.appendChild(bgImage);
