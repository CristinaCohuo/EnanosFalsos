document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById("modalBienvenida");
    const closeBtn = document.querySelector(".cerrar");

    // Verificar si ya se mostró antes
    const modalYaMostrado = localStorage.getItem("modalMostrado");

    if (!modalYaMostrado) {
        modal.style.display = "block";
    }

    // Al cerrar, guardar que ya fue mostrado
    function cerrarModal() {
        modal.style.display = "none";
        localStorage.setItem("modalMostrado", "true");
    }

    if (closeBtn) {
        closeBtn.addEventListener("click", cerrarModal);
    }

    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            cerrarModal();
        }
    });
});