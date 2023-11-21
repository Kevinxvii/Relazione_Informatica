const doc = document;
const menuOpen = doc.querySelector(".menu");
const menuClose = doc.querySelector(".close");
const overlay = doc.querySelector(".overlay");

menuOpen.addEventListener("click", () => {
  overlay.classList.add("overlay--active");
});

menuClose.addEventListener("click", () => {
  overlay.classList.remove("overlay--active");
});

    document.addEventListener('DOMContentLoaded', function () {
        var mobileMenuBtn = document.getElementById('mobileMenuBtn');
        var mobileMenuLinks = document.getElementById('mobileMenuLinks');

        mobileMenuBtn.addEventListener('click', function () {
            // Toggle the class to show/hide the links
            mobileMenuLinks.classList.toggle('show');
        });
    });
