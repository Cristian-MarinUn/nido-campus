document.getElementById("registroForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el envío tradicional del formulario

    let user = document.getElementById("newUser").value;
    let email = document.getElementById("newEmail").value;
    let password = document.getElementById("newPassword").value;

    if (user === "" || email === "" || password === "") {
        alert("Por favor, completa todos los campos.");
    } else {
        alert("Usuario registrado con éxito: " + user);
        window.location.href = "index.html"; // Redirigir a inicio de sesión
    }
});
