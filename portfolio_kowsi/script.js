// let currentSlide = 0;
// const totalSlides = 5;

// const slider = document.querySelector(".slider");
// const menuItems = document.querySelectorAll("nav ul li");
// const nextBtn = document.querySelector(".next");
// const prevBtn = document.querySelector(".prev");

// function updateSlide() {
//     slider.style.transform = `translateX(-${currentSlide * 100}vw)`;
//     updateActiveMenu();
// }

// function updateActiveMenu() {
//     menuItems.forEach(item => item.classList.remove("active"));
//     menuItems[currentSlide].classList.add("active");
// }
// function togglePopup() {
//     const popup = document.getElementById("linkedinPopup");
//     popup.style.display = popup.style.display === "block" ? "none" : "block";
// }


// nextBtn.addEventListener("click", () => {
//     if (currentSlide < totalSlides - 1) {
//         currentSlide++;
//         updateSlide();
//     }
// });

// prevBtn.addEventListener("click", () => {
//     if (currentSlide > 0) {
//         currentSlide--;
//         updateSlide();
//     }
// });

// menuItems.forEach(item => {
//     item.addEventListener("click", function () {
//         currentSlide = parseInt(this.getAttribute("data-index"));
//         updateSlide();
//     });
// });

// Smooth Skill Animation on Scroll

const skillsSection = document.querySelector("#skills");
const skillLevels = document.querySelectorAll(".skill-level");

function showSkills() {
    const sectionTop = skillsSection.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (sectionTop < screenHeight - 100) {
        skillLevels.forEach((skill) => {
            skill.style.width = skill.classList.contains("html") ? "90%" :
                                skill.classList.contains("css") ? "85%" :
                                skill.classList.contains("js") ? "75%" :
                                skill.classList.contains("react") ? "70%" :
                                skill.classList.contains("java") ? "85%" : "0%";
        });
        
    }
    // Scroll Progress Bar Animation

window.addEventListener("scroll", () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercent = (scrollTop / scrollHeight) * 100;

    document.querySelector(".progress-bar").style.width = scrollPercent + "%";
});

function showCertificate(src) {
    document.getElementById("certificateModal").style.display = "block";
    document.getElementById("certificateImage").src = src;
}

function closeModal() {
    document.getElementById("certificateModal").style.display = "none";
}

}

window.addEventListener("scroll", showSkills);
