window.onload = function() {
    if (!sessionStorage.getItem('splashShown')) {
        const splashScreen = document.getElementById('splash-screen');
        const mainContent = document.getElementById('main-content');

        setTimeout(function() {
            splashScreen.style.opacity = '0';  

            setTimeout(function() {
                splashScreen.style.display = 'none';
                mainContent.style.display = 'block';
                setTimeout(function() {
                    mainContent.style.opacity = '1';  
                }, 50);
            }, 500);  

            sessionStorage.setItem('splashShown', 'true');
        }, 2000);  //
    } else {
       
        document.getElementById('splash-screen').style.display = 'none';
        document.getElementById('main-content').style.display = 'block';
        setTimeout(function() {
            document.getElementById('main-content').style.opacity = '1';  
        }, 50);
    }

    // Funcionalidad del modal
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modalImage');
    const menuDiario = document.getElementById('menuDiario');
    const closeModal = document.querySelector('.close');

    menuDiario.onclick = function() {
        modal.style.display = "block";
        modalImage.src = this.src;
    }


    closeModal.onclick = function() {
        modal.style.display = "none";
    }


    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
};



    document.addEventListener("DOMContentLoaded", function () {
        const menuSection = document.getElementById("menu");
        const waveLines = document.createElement("div");
        waveLines.id = "wave-lines";
        menuSection.appendChild(waveLines);

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Si el #menu está en la pantalla, mostramos las líneas onduladas
                    waveLines.style.display = 'block';
                    waveLines.style.animation = 'wave 5s linear infinite, fadeIn 2s forwards';
                } else {
                    // Si el #menu sale de la pantalla, disolvemos las líneas
                    waveLines.style.animation = 'fadeOut 2s forwards';
                }
            });
        }, { threshold: 0.5 });

        observer.observe(menuSection);
    });

