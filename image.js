const imageSources = ['1.jpg','2.jpg','3.jpg','4.jpg','5.png','6.jpg','7.jpg','8.jpeg'];
function changeBackgroundImage() {
    const randomIndex = Math.floor(Math.random() * imageSources.length);
    document.body.style.backgroundImage = `url(${imageSources[randomIndex]})`;
}
setInterval(changeBackgroundImage, 1000);