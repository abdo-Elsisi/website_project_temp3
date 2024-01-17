// alert(innerWidth);
// variables
// header
const otherAnchor = document.getElementById("other-menu");
const megaMenu = document.querySelector(".mega-menu");
// testimonials
const starsHolder = document.querySelectorAll(".rate-stars");

function main() {
    inserReviewsStars();
}
//start the program
main();

// click other anchor to open mega menu, hoverout or click again to close it
function toggleMenuDisplay() {
    console.log("clicked");
    const currDisplay = megaMenu.style.display;
    setTimeout(function() {
        megaMenu.classList.toggle("activate-mega");
    },100)
    if(currDisplay == "none")
        megaMenu.style.display = "flex";
    else
        megaMenu.style.display = "none"
}
megaMenu.addEventListener("mouseleave",toggleMenuDisplay);

//insert start for testimonials reviews section
function inserReviewsStars() {
    starsHolder.forEach(holder => {
        const numFilledStars =  holder.dataset.numStars;
        const totalStars = 5;
        const stars = [];
        //append filled stars to the parent
        for(let i = 0; i < totalStars ; i++) {
            //create a star element
            const starEle = document.createElement("i");
            // filledStarElement.classList.add("filled", "fas", "fa-star");
            starEle.classList.add("fa-star");
            stars.push(starEle);//store for later appending
            if (i < numFilledStars)
                starEle.classList.add("filled","fas")
            else
                starEle.classList.add("far")
        }
        //appen all stars to the holder
        holder.append(...stars);
    });
}