document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.enlarge-image');
    const enlargedContainer = document.getElementById('enlarged-container');
    const enlargedImage = document.getElementById('enlarged-image');

    images.forEach(image => {
        image.addEventListener('click', function () {
            enlargedImage.src = this.src;
            enlargedContainer.style.display = 'flex';
        });
    });
});

function closeEnlarged() {
    const enlargedContainer = document.getElementById('enlarged-container');
    enlargedContainer.style.display = 'none';
}
