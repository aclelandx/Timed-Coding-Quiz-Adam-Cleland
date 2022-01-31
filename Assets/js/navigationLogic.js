let navSwapButton = document.getElementById(`navSwapIcon`);
const navSwapElements = document.querySelectorAll(`[data-slider]`);

function navigationSwap () {
    for (var i = 0; i < navSwapElements.length; i++) {
        navSwapElements[i].classList.toggle(`nav-open`);
        navSwapElements[i].classList.toggle(`nav-closed`);
    };
    return;
};



navSwapButton.addEventListener(`click`, navigationSwap);