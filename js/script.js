async function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (!username || !password) {
        alert("Por favor, ingrese usuario y contraseña.");
        return;
    }

    const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, password })
    });

    const data = await response.json();

    if (response.ok) {
        localStorage.setItem("user", JSON.stringify(data));
        window.location.href = "/html/ingreso.html"; // Redirigir a la página de habitaciones
    } else {
        alert(data.message);
    }
}
