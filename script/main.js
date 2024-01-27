// alert(innerWidth);
// variables
// header
const otherAnchor = document.getElementById("other-menu");
const megaMenu = document.querySelector(".mega-menu");
const progressBar = document.getElementById("progress");
// testimonials
const starsHolder = document.querySelectorAll(".rate-stars");

function main() {
    inserReviewsStars();
    //progress bar update
    handleProgressBar();
    //stats card animation
    handleCardCounterAnimation();
    //dark mode on-off toggle
    handleDarkTheme();
    //skills progress bar loading animation handling
    handleSkillProgressBars();
    //update upcoing event date
    updateEventDate();
}
//start the program
main();

// click other anchor to open mega menu, hoverout or click again to close it
function toggleMenuDisplay() {
    console.log("clicked");
    const currDisplay = megaMenu.style.display;
    setTimeout(function () {
        megaMenu.classList.toggle("activate-mega");
    }, 100)
    if (currDisplay == "none")
        megaMenu.style.display = "flex";
    else
        megaMenu.style.display = "none"
}
megaMenu.addEventListener("mouseleave", toggleMenuDisplay);

//insert start for testimonials reviews section
function inserReviewsStars() {
    starsHolder.forEach(holder => {
        const numFilledStars = holder.dataset.numStars;
        const totalStars = 5;
        const stars = [];
        //append filled stars to the parent
        for (let i = 0; i < totalStars; i++) {
            //create a star element
            const starEle = document.createElement("i");
            // filledStarElement.classList.add("filled", "fas", "fa-star");
            starEle.classList.add("fa-star");
            stars.push(starEle);//store for later appending
            if (i < numFilledStars)
                starEle.classList.add("filled", "fas")
            else
                starEle.classList.add("far")
        }
        //appen all stars to the holder
        holder.append(...stars);
    });
}

function handleProgressBar() {
    document.addEventListener("scroll", function () {
        const toatalPageHeight = document.documentElement.scrollHeight - innerHeight;
        const scrolledHeight = scrollY;
        progressBar.style.width = (scrolledHeight / toatalPageHeight) * 100 + "%";
    })
}

//statistics counter increase animatoin
function handleCardCounterAnimation() {
    const headers = document.querySelectorAll('.stats .card h3'); // Assuming a class for header elements

    // Single scroll event listener
    document.addEventListener('scroll', () => {
        headers.forEach(header => {
            const headerRect = header.getBoundingClientRect();
            const isVisible = headerRect.bottom <= innerHeight && headerRect.top >= 0;
            const finalValue = parseInt(header.dataset.num);
            //counter animation plays for first loading only
            if (isVisible && !header.classList.contains('played')) {
                console.log('Animate this one now');
                header.classList.add('played'); // Use a class to track played state
                let counter = 0;
                const intervalId = setInterval(() => {
                    header.textContent = ++counter; // Use textContent over innerHTML for efficiency
                    if (counter >= finalValue)
                        clearInterval(intervalId);
                }, 10);
            }
        });
    });
}

//dark theme
function handleDarkTheme() {
    const darkSwitch = document.getElementById("dark-toggle");
    darkSwitch.addEventListener("click",function() {
        document.body.classList.toggle("dark-theme");
    })
}

function handleSkillProgressBars() {
    const bars = document.querySelectorAll(".skill-bar");

    document.addEventListener("scroll", () => {
        const height = window.innerHeight;
        bars.forEach(bar => {
            const finalValue = bar.dataset.progress;
            let isVisible = false;
            const rect = bar.getBoundingClientRect();
            let isPlayed = bar.classList.contains("played");
            //define the visibility condition
            isVisible = rect.top >= 0 && rect.bottom <= height;
            if(isVisible && !isPlayed) {
                bar.classList.add("played");
                console.log("play bar animation");
                const widthInterval = setInterval( ()=> {
                    let currWidth = parseInt(bar.style.width);
                    currWidth ++;
                    bar.style.width = currWidth + "%";
                    if(currWidth >= finalValue) {
                        clearInterval(widthInterval);
                    }
                },10);
            }
        });
    })
}

function updateEventDate() {
    const eventDate = new Date(2024,7,22,8,0,0); // 22 - Aug - 2024 @ 08:00 Am
    const days = document.getElementById("days");
    const hours = document.getElementById("hours");
    const mins = document.getElementById("mins");
    const secs = document.getElementById("secs");
    const alert = document.getElementById("time-up");
    const updateInterval = setInterval(() => { //update displayed date every second
        const curr = new Date();// time now
        const distance = eventDate - curr ;
        if(distance < 0){
            console.log("Time's UP!");
            alert.innerHTML = "Time's UP!";
            clearInterval(updateInterval);
        }
        else{
            const d = Math.floor(distance / (1000 * 60 * 60 * 24));
            const h = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
            const m = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
            const s = Math.floor(distance % (1000 * 60) / (1000));
            // console.log(`Time is ${d} days ${h} hours, ${m} min & ${s} secs`);
            days.innerHTML = d;
            hours.innerHTML = h;
            mins.innerHTML = m;
            secs.innerHTML = s;
        }
    }, 1000);
}
// fingerprint 
console.log("%cGitHub: @abdo-elsisi","background-color: #000; color: #fff; padding: 10px; border: 2px dashed #eee; font-size: 1.4em; font-weight: bold;")