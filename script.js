window.addEventListener('load', function() {
    var splashScreen = document.getElementById('splash-screen');
    var mainContent = document.getElementById('main-content');

    if (!sessionStorage.getItem('splashShown')) {
        setTimeout(function() {
            splashScreen.style.opacity = '0';
            splashScreen.style.transition = 'opacity 0.5s ease';

            setTimeout(function() {
                splashScreen.style.display = 'none';
                mainContent.style.display = 'block';
                mainContent.style.opacity = '2';

                sessionStorage.setItem('splashShown', 'true');
            }, 500);
        }, 2000);
    } else {
        splashScreen.style.display = 'none';
        mainContent.style.display = 'block';
        mainContent.style.opacity = '1';
    }
});

document.addEventListener("DOMContentLoaded", function () {
    let lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));

    if ("IntersectionObserver" in window) {
        let lazyImageObserver = new IntersectionObserver(function (entries, observer) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    let lazyImage = entry.target;
                    lazyImage.src = lazyImage.dataset.src;
                    lazyImage.classList.remove("lazy");
                    lazyImageObserver.unobserve(lazyImage);
                }
            });
        });

        lazyImages.forEach(function (lazyImage) {
            lazyImageObserver.observe(lazyImage);
        });
    }
});

window.addEventListener('scroll', function () {
    var encargo = document.getElementById('encargo');
    if (encargo) {
        var position = encargo.getBoundingClientRect().top;
        var screenPosition = window.innerHeight / 1.3;

        if (position < screenPosition) {
            encargo.classList.add('show');
        }
    }

    var footer = document.querySelector('footer');
    if (footer) {
        var scrollPosition = window.scrollY + window.innerHeight;
        var documentHeight = document.body.offsetHeight;

        if (scrollPosition >= documentHeight - 50) {
            footer.classList.add('show');
        }
    }
});

var modal = document.getElementById('modal');
var modalImg = document.getElementById("modalImage");
var menuImg = document.getElementById('menuDiario');
var closeBtn = document.getElementsByClassName("close")[0];

if (menuImg) {
    menuImg.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
    }
}

if (closeBtn) {
    closeBtn.onclick = function() { 
        modal.style.display = "none";
    }
}
