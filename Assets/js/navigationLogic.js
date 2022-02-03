// defines the element in the dom so it can be interacted with 
let navSwapButton = document.getElementById(`navSwapIcon`);

const navSwapElements = document.querySelectorAll(`[data-slider]`);

// toggles the class of nav-open and nav-closed on the nav swap elements array 
function navigationSwap () {
    for (var i = 0; i < navSwapElements.length; i++) {
        navSwapElements[i].classList.toggle(`nav-open`);
        navSwapElements[i].classList.toggle(`nav-closed`);
    };
    return;
};

navSwapButton.addEventListener(`click`, navigationSwap);