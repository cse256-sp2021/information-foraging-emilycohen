export function setupSticky() {
    // TODO: Copy and paste your sticky code in here!!

    window.onscroll = function() {setupSticky()};

    // Get the header
    var header = document.getElementById("main-menu-container");

    // Get the offset position of the navbar
    var sticky = header.offsetTop;

    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }

 }