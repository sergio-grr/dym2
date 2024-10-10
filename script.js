// Obtener elementos del DOM
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modalImage');
const menuDiario = document.getElementById('menuDiario');
const closeModal = document.querySelector('.close');

// Abrir el modal al hacer clic en la imagen
menuDiario.onclick = function() {
    modal.style.display = "block";
    modalImage.src = this.src;
}

// Cerrar el modal al hacer clic en la 'X'
closeModal.onclick = function() {
    modal.style.display = "none";
}

// Cerrar el modal al hacer clic fuera del contenido
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
