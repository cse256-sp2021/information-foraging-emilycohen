export function setupSticky() {
    // TODO: Copy and paste your sticky code in here!!
    window.onscroll = function() {setupHeader()};
    document.getElementById("mturk-top-banner-inner-span").addEventListener("click", setupHeader);

    // Get the header
    var header = document.getElementById("main-menu-container");
    var mturkBanner = document.getElementById("mturk-top-banner-drop-down-content")
    var mturk = document.getElementById("mturk-top-banner-arrow")
    var butt = document.getElementById("mturk-top-banner-drop-down-button")
    console.log(butt.className)

    // window.onload = setupHeader();
    // Get the offset position of the navbar
    var sticky = header.offsetTop;

    function setupHeader() {
    // if (window.pageYOffset > sticky && butt.className == "fa fa-chevron-down none") 
    // console.log(butt.classList.contains("display"))
    console.log(butt.classList)
    if (window.pageYOffset > sticky && (butt.classList.contains("none"))){
        header.classList.add("stickyBanner");
        header.classList.remove("sticky");
         console.log("OPEN");
    } 
    else if (window.pageYOffset > sticky && (butt.classList.contains("display")))
    {
            // else if (window.pageYOffset > sticky && butt.className == "fa fa-chevron-down display")

        header.classList.add("sticky"); 
        header.classList.remove("stickyBanner");
        // console.log(butt.className)

        console.log("CLOSED");
    }
    else if (window.pageYOffset <= sticky) {
        header.classList.remove("sticky");
        header.classList.remove("stickyBanner");

    }
}
 }