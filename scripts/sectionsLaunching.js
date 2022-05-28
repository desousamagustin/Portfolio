var homeSection = document.getElementById("home");
var aboutMeSection = document.getElementById("about-me");
var skillsetSection = document.getElementById("skillset");
var projectsSection = document.getElementById("projects");
var contactSection = document.getElementById("contact");

var homeLink = document.getElementById("home__link");
var aboutMeLink = document.getElementById("about-me__link");
var skillsetLink = document.getElementById("skillset__link");
var projectsLink = document.getElementById("projects__link");
var contactLink = document.getElementById("contact__link");

var sectionsList = [homeSection,aboutMeSection,skillsetSection,projectsSection,contactSection];

function updateSections(aSection) {
    sectionsList.forEach(section => {section.style.display="none";});
    aSection.style.display="flex";
    body.style.overflowY="auto";
}

document.querySelectorAll(".mobile-links__a").forEach( link => {
    link.addEventListener("click", () => {
        switch(link) {
            case homeLink:
                updateSections(homeSection);
                break;

            case aboutMeLink:
                updateSections(aboutMeSection);
                break;

            case skillsetLink:
                updateSections(skillsetSection);
                break;
            
            case projectsLink:
                updateSections(projectsSection);
                break;

            case contactLink:
                updateSections(contactSection);
                break;
        }
        
        barsIcon.classList.remove("fa-xmark");
        barsIcon.classList.add("fa-bars");
        navBar.style.display="none";
        navBarStatus = false;
    });
});