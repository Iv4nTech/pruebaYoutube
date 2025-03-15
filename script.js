document.getElementById("magicButton").addEventListener("click", function() {
    let mensaje = document.getElementById("mensaje");
    mensaje.textContent = "¡Te has sucrito al mejor canal de YouTube! 🙀";
    mensaje.style.opacity = 0;
    mensaje.style.transition = "opacity 1s";
    setTimeout(() => mensaje.style.opacity = 1, 100);
});
