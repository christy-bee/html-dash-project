const form = document.getElementById("contact-form");

if (form) {

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const subject = document.getElementById("subject").value;
        const message = document.getElementById("message").value;

        const mailto = `mailto:christy.boellaardvantuyl.bee@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
            "Naam: " + name +
            "\nE-mail: " + email +
            "\n\nBericht:\n" + message
        )}`;

        window.location.href = mailto;
    });

}

/* SLIDESHOWS */

const slideshows = document.querySelectorAll("[data-slideshow]");

slideshows.forEach(function(slideshow) {

    const images = slideshow.querySelectorAll("img");
    const prevButton = slideshow.querySelector(".prev");
    const nextButton = slideshow.querySelector(".next");

    let currentImage = 0;

    /* Alleen de eerste afbeelding laten zien */
    images.forEach(function(image, index) {

        if (index === 0) {
            image.style.display = "block";
        } else {
            image.style.display = "none";
        }

    });

    /* Volgende afbeelding */
    nextButton.addEventListener("click", function() {

        images[currentImage].style.display = "none";

        currentImage++;

        if (currentImage >= images.length) {
            currentImage = 0;
        }

        images[currentImage].style.display = "block";

    });

    /* Vorige afbeelding */
    prevButton.addEventListener("click", function() {

        images[currentImage].style.display = "none";

        currentImage--;

        if (currentImage < 0) {
            currentImage = images.length - 1;
        }

        images[currentImage].style.display = "block";

    });

});