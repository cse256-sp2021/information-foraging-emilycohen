export function setupSticky() {
    // TODO: Copy and paste your sticky code in here!!
   
    window.onscroll = function() {setupHeader()};
    // Get the header
    var header = document.getElementById("main-menu-container");
    var mturkBanner = document.getElementById("mturk-top-banner-drop-down-content")
    // console.log(mturkBanner.className)

    // window.onload = setupHeader();
    // Get the offset position of the navbar
    var sticky = header.offsetTop;
    function setupHeader() {
    if (window.pageYOffset > sticky && mturkBanner.className.length==0) {
        header.classList.add("stickyBanner");
        header.classList.remove("sticky");
         console.log("OPEN")
    } 
    else if (window.pageYOffset > sticky && mturkBanner.className == "none")
    {
        header.classList.add("sticky"); 
        header.classList.remove("stickyBanner");

        console.log("CLOSED")
    }
    else {
        header.classList.remove("sticky");
        header.classList.remove("stickyBanner");

    }
    }
 }