// Animações ao aparecer na tela

const elementos = document.querySelectorAll(
    ".service, .about-item, .difference-list div, .gallery-item, .model-box"
);

const observer = new IntersectionObserver(
    (entradas) => {

        entradas.forEach((entrada) => {

            if (entrada.isIntersecting) {

                entrada.target.classList.add("mostrar");

            }

        });

    },
    {
        threshold: 0.12
    }
);


elementos.forEach((elemento) => {

    elemento.classList.add("animacao");

    observer.observe(elemento);

});