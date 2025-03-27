// Simulación de usuario autenticado
document.addEventListener("DOMContentLoaded", function () {
    let userName = localStorage.getItem("user") || "Usuario";
    document.getElementById("user-name").textContent = "Bienvenido, " + userName;
});

// Cerrar sesión y volver al login
function logout() {
    localStorage.removeItem("user"); // Borra datos del usuario
    window.location.href = "index.html"; // Redirige al login
}
