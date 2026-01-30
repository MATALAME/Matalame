document.querySelectorAll('.carousel').forEach(carousel => {
    const imagesContainer = carousel.querySelector('.carousel-images');
    const images = imagesContainer.querySelectorAll('img');
    const prevBtn = carousel.querySelector('.prev');
    const nextBtn = carousel.querySelector('.next');

    let index = 0;

    function showImage(i) {
        if (i < 0) index = images.length - 1;
        else if (i >= images.length) index = 0;
        else index = i;
        imagesContainer.style.transform = `translateX(-${index * 100}%)`;
    }

    prevBtn.addEventListener('click', () => showImage(index - 1));
    nextBtn.addEventListener('click', () => showImage(index + 1));

    showImage(index); 
});