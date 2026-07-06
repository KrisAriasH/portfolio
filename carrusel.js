document.addEventListener("DOMContentLoaded", () => {

    document.querySelectorAll(".project-carousel").forEach(carousel => {

        const slides = carousel.querySelectorAll(".carousel-slide");
        const prev = carousel.querySelector(".prev");
        const next = carousel.querySelector(".next");
        const dotsContainer = carousel.querySelector(".carousel-dots");

        console.log("Carrusel encontrado:", carousel);
        console.log("Slides:", slides.length);


        let index = 0;
        let interval;


        slides.forEach((_, i) => {

            const dot = document.createElement("div");
            dot.className = "carousel-dot";

            dot.onclick = () => {
                index = i;
                update();
                restart();
            };

            dotsContainer.appendChild(dot);

        });


        const dots = dotsContainer.querySelectorAll(".carousel-dot");


        function update(){

            slides.forEach(slide => {
                slide.classList.remove("active");
            });

            dots.forEach(dot => {
                dot.classList.remove("active");
            });


            slides[index].classList.add("active");
            dots[index].classList.add("active");

        }


        function nextSlide(){

            index = (index + 1) % slides.length;
            update();

        }


        function prevSlide(){

            index = (index - 1 + slides.length) % slides.length;
            update();

        }


        function restart(){

            clearInterval(interval);
            interval = setInterval(nextSlide, 5000);

        }


        next.onclick = () => {
            nextSlide();
            restart();
        };


        prev.onclick = () => {
            prevSlide();
            restart();
        };


        update();
        restart();

    });

});