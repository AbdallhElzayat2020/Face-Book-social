// ScrollReveal({
//     reset: true
// });

// ScrollReveal({
//     reset: true,
//     distance: '80px',
//     duration: 2000,
//     delay: 200,
// });

// ScrollReveal().reveal('.logo', {
//     origin: "top"
// });

// type js
let typed = new Typed('.multiple-text', {
    strings: ["FaceBook", "Instegrame", "elzayat"],
    typeSpeed: 100,
    backSpace: 100,
    backDelay: 1000,
    loop: true
});
// type js
//======================= start====================== 
let menuItem = document.querySelectorAll(".menu-item");

// search Bar
let messages = document.querySelector(".messages");

let message = document.querySelectorAll("message");

let messageSearch = document.querySelector("#message-search");



// remove active class from all menu item
let changeActiveItem = () => {

    menuItem.forEach((item => {

        item.classList.remove("active");
    }));
};

menuItem.forEach((item => {

    item.addEventListener("click", () => {

        changeActiveItem();

        item.classList.add("active");

        if (item.id != "notifications") {

            document.querySelector(".notifications-popup").style.display = "none";
        } else {
            document.querySelector(".notifications-popup").style.display = "block";

            document.querySelector("#.notifications .notification-count").style.display = "none";
        }
    });
}));

// Message
let messageNotification = document.querySelector("#message-notifications");





// --------message chat
let searchMessage = () => {
    let val = messageSearch.value.toLowerCase();
    // console.log(val);
    message.forEach((user => {
        let name = user.querySelectorAll("h5").textContent.toLowerCase();
        if (name.indexOf(val) != -1) {
            user.style.display = "flex";
        } else {
            user.style.display = "none";
        };
    }));
};

// search Chat when item is checked
messageSearch.addEventListener("keyup", searchMessage);


messageNotification.addEventListener("click", () => {

    messages.style.boxShadow = "0 0 1.5rem var(--color-primary)";

    messageNotification.querySelector(".notifications-count").style.display = "none";

    setTimeout(() => {
        messages.style.boxShadow = "none";
    }, 3000);
});


//////==========
// theme customizeation
let theme = document.querySelector("#theme");

let themeModal = document.querySelector(".customize-theme");

// open theme modal
let openThemeModal = () => {
    themeModal.style.display = "grid";
}

// closes modal
let closeThemeModal = (e) => {
    if (e.target.classList.contains("customize-theme")) {

        themeModal.style.display = "none";
    }
};
// close modal
themeModal.addEventListener("click", closeThemeModal);


theme.addEventListener("click", openThemeModal);


// fontSize style
// let fontSize = document.querySelectorAll(".choose-size");

// let root = document.querySelector(":root");


// remove active class from all spans for fontsize selectors
// let removeSizeSelector = () => {
//     fontSize.forEach(size => {
//         size.classList.remove("active");

//     });
// };

// fontSize.forEach((size) => {


//     size.addEventListener("click", () => {
//         removeSizeSelector();
//         let fontSize;
//         size.classList.toggle("active");
//         if (size.classList.contains("font-size-1")) {
//             fontSize = "10px";
//             root.style.setProperty("----sticky-top-left", "5.4rem");
//             root.style.setProperty("----sticky-top-right", "5.4rem");
//         } else if (size.classList.contains("font-size-2")) {
//             fontSize = "13px";
//             root.style.setProperty("----sticky-top-left", "5.4rem");
//             root.style.setProperty("----sticky-top-right", "-7rem");
//         } else if (size.classList.contains("font-size-3")) {
//             fontSize = "16px";
//             root.style.setProperty("----sticky-top-left", "-2rem");
//             root.style.setProperty("----sticky-top-right", "-17rem");
//         } else if (size.classList.contains("font-size-4")) {
//             fontSize = "19px";
//             root.style.setProperty("----sticky-top-left", "-5rem");
//             root.style.setProperty("----sticky-top-right", "-25rem");
//         } else if (size.classList.contains("font-size-5")) {
//             fontSize = "22px";
//             root.style.setProperty("----sticky-top-left", "-10rem");
//             root.style.setProperty("----sticky-top-right", "-33rem");
//         }
//         //change font size of the root html element
//         document.querySelector("html").style.fontSize = fontSize;
//     });
// });

// choose size
// let fontSize = document.querySelectorAll(".choose-size");
// // change root element in html 
// let root = document.querySelector(":root");

// fontSize.forEach((size => {
//     let fontSize;

//     size.addEventListener("click", () => {
//         if (size.classList.contains("font-size-1")) {
//             fontSize = "10px";
//             root.style.setProperty("----sticky-top-left", "5.4rem");
//             root.style.setProperty("----sticky-top-right", "5.4rem");
//         } else if (size.classList.contains("font-size-2")) {
//             fontSize = "13px";
//             root.style.setProperty("----sticky-top-left", "5.4rem");
//             root.style.setProperty("----sticky-top-right", "-7rem");
//         } else if (size.classList.contains("font-size-3")) {
//             fontSize = "16px";
//             root.style.setProperty("----sticky-top-left", "-2rem");
//             root.style.setProperty("----sticky-top-right", "-17rem");
//         } else if (size.classList.contains("font-size-4")) {
//             fontSize = "19px";
//             root.style.setProperty("----sticky-top-left", "-5rem");
//             root.style.setProperty("----sticky-top-right", "-25rem");
//         } else if (size.classList.contains("font-size-5")) {
//             fontSize = "22px";
//             root.style.setProperty("----sticky-top-left", "-12rem");
//             root.style.setProperty("----sticky-top-right", "-35rem");
//         }
//         // change font size of the root html element
//         document.querySelector("html").style.fontSize = fontSize;
//     });
// }));
// choose size



// change primary color
// let colorPallette = document.querySelectorAll(".choose-color span");
// colorPallette.forEach(color => {
//     color.addEventListener("click", () => {
//         let primary;
//         if (color.classList.contains("color-1")) {
//             primaryHue = 252;
//         } else if (color.classList.contains("color-2")) {
//             primaryHue = 52;
//         } else if (color.classList.contains("color-3")) {
//             primaryHue = 352;
//         } else if (color.classList.contains("color-4")) {
//             primaryHue = 152;
//         } else if (color.classList.contains("color-5")) {
//             primaryHue = 202;
//         }

//         root.style.setProperty("--primary-color-Heu", primaryHue);


//     });
// });