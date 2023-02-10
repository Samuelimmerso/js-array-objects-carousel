// costanti
const N_Images = 5;
const Images = ['./img/01.webp', './img/02.webp', './img/03.webp', './img/04.webp', './img/05.webp'];
const N_Buttons = 2;

// declarations
const lateral_carousel = document.querySelector(".lateral_carousel");
const principal_image = document.querySelector(".principal_image");

let carousel_img = []; // lateral images container
let img;
let scroll_button = []; // scroll buttons







//********************PRINCIPAL SECTION*********************** */
principal_image.classList.add("principal_image", "col-10");
principal_image.innerHTML = `<img src="${Images[0]}" class="img"</img>`; // default






//**********BUTTONS**********+ */

//creazione pulsanti di scorrimento
for (let i = 0; i < N_Buttons; i++) {
    scroll_button[i] = document.createElement("button");
    scroll_button[i].classList.add("scroll_button", "p-2");
    scroll_button[i].innerHTML = "UP";
}




// **********************OUTPUT*********************************

lateral_carousel.appendChild(scroll_button[0]); // aggiungiamo il bottone per salire

//inserimento immagini
for (let i = 0; i < N_Images; i++) {
    carousel_img[i] = document.createElement("div");
    carousel_img[i].classList.add("carousel_img");

    //default
    if (i == 0) {
        carousel_img[i].classList.add("active");
    }

    carousel_img[i].innerHTML = `<img src="${Images[i]}" class="img">`;
    lateral_carousel.appendChild(carousel_img[i]);
}

lateral_carousel.appendChild(scroll_button[1]); // aggiungiamo il bottone per scendere


// **********************OUTPUT*********************************





//********************CLICK BUTTONS**************************** */


// abilitazione pulsanti

//pulsante up
scroll_button[0].addEventListener("click", function () {
    for (let i = 0; i < N_Images; i++) {
        if (carousel_img[i].classList.contains("active")) {
            if (i > 0 && i < N_Images) {
                carousel_img[i].classList.remove("active");
                carousel_img[i - 1].classList.add("active");

                principal_image.innerHTML = `<img src="${Images[i - 1]}" class="img"</img>`;

                return;
            }
        }
    }
});


//pulsate down 
scroll_button[1].addEventListener("click", function () {
    for (let i = 0; i < N_Images; i++) {
        if (carousel_img[i].classList.contains("active")) {
            if (i >= 0 && i < N_Images - 1) {
                carousel_img[i].classList.remove("active");
                carousel_img[i + 1].classList.add("active");

                principal_image.innerHTML = `<img src="${Images[i + 1]}" class="img"</img>`;
                return;
            }
        }
    }
});