const switchBtn = document.querySelector(".switch-btn");
const bulbTop = document.querySelector(".bulb-top");
const bulbBottom = document.querySelector(".bulb-bottom");

let isOpen = false;

switchBtn.addEventListener("click", () => {

    isOpen = !isOpen;

    if (isOpen) {

        switchBtn.classList.add("on");

        bulbTop.classList.add("bulb-on");
        bulbBottom.classList.add("bulb-on");

    } else {

        switchBtn.classList.remove("on");

        bulbTop.classList.remove("bulb-on");
        bulbBottom.classList.remove("bulb-on");

    }

});
