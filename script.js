
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

// Mobile Menu
menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Close Menu
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});


// Project Filter
const filterButtons = document.querySelectorAll(".filter-btn");
const projects = document.querySelectorAll(".project-card");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        const filter = button.dataset.filter;

        projects.forEach(project => {

            const category = project.dataset.category.split(" ");

            if (filter === "all" || category.includes(filter)) {
                project.classList.remove("hide");
            } else {
                project.classList.add("hide");
            }

        });

    });

});
