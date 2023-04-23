const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const close = document.getElementById("close");

const c = document.getElementsByClassName
if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

var navMenuAnchorTags = document.querySelectorAll(".nav-menu a");

for (var i = 0; i < navMenuAnchorTags.length; i++) {
    navMenuAnchorTags[i].addEventListener("click", function (event) {
        event.preventDefault();
        var targetSectionId = this.textContent.trim().lowerCase();
        var targetSection = document.getElementById(targetSectionId);

        var interval = setInterval(function () {
            var targetSectionCordinates = targetSection.getBoundingClientRect();
            if (targetSectionCordinates.top <= 0) {
                clearInterval(interval);
                return;
            }

            window.scrollBy(0, 50);
        }, 50);
    })
}