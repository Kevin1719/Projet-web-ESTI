$(document).ready(function() {
    $(".hov").hover3d({
        selector: ".hov1",
        shine: true,
    });

    $(".hov").hover3d({

        // selector for element
        selector: null,

        // Perspective value for 3d space
        perspective: 1000,

        // Mouse movement sensitivity
        sensitivity: 20,

        // Default behavior is the element will follow the mouse, look like it facing the mouse
        invert: false,

        // Add shining layer
        shine: false,

        // Helper class when mouse hover in the element
        hoverInClass: "hover-in",

        // Helper class when mouse hover Out the element
        hoverOutClass: "hover-out",

        // Helper class when the mouse is hovering the element
        hoverClass: "hover-3d"

    });

    /*Mode nuit*/
    const checkbox = document.querySelector('.checkbox');
    const main = document.querySelector('main');
    const h1 = document.querySelector('h1');
    const card_body = document.querySelectorAll('.card-body');
    const card_text = document.querySelectorAll('p');
    const view = document.querySelectorAll('.btn');
    const couleur = document.querySelectorAll('.couleur');
    const star = document.querySelectorAll(".far ");
    const art_type = document.querySelectorAll(".art_type");
    const mode = document.querySelector(".mode i");

    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            main.style.background = '#254252';
            h1.style.color = 'white';
            mode.className = "fas fa-moon moonColor";

            for (let i = 0; i < card_body.length; i++) {
                card_body[i].style.background = "#171C2D";
            };

            for (let j = 0; j < card_text.length; j++) {
                card_text[j].style.color = "#FFF";
            };

            for (let k = 0; k < view.length; k++) {
                view[k].style.color = '#FFF';
            };

            for (let n = 0, x = 0; n < couleur.length, x < star.length; n++, x++) {
                couleur[n].style.color = "purple";
                star[x].style.color = "#FFF";
            }

            for (let c = 0; c < art_type.length; c++) {
                art_type[c].style.color = "crimson"
            }

        } else {
            main.style.background = '#eab56f';
            h1.style.color = '#212529';
            mode.className = "fas fa-sun mode_color";

            for (let i = 0; i < card_body.length; i++) {
                card_body[i].style.background = "";
            };
            for (let j = 0; j < card_text.length; j++) {
                card_text[j].style.color = "";
            };

            for (let k = 0; k < view.length; k++) {
                view[k].style.color = "";
            };
            for (let n = 0, x = 0; n < couleur.length, x < star.length; n++, x++) {
                couleur[n].style.color = "";
                star[x].style.color = "";
            }

            for (let c = 0; c < art_type.length; c++) {
                art_type[c].style.color = "";
            }
        }
    });
});