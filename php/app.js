const API_URL = "crud_usuarios.php"; // Asegúrate de que la ruta es correcta

// 🔹 Función para registrar usuario
async function registrarUsuario(nombres, correo, celular, contraseña) {
    const data = new FormData();
    data.append("accion", "crear");
    data.append("nombres", nombres);
    data.append("correo", correo);
    data.append("celular", celular);
    data.append("contraseña", contraseña);

    const response = await fetch(API_URL, {
        method: "POST",
        body: data,
    });

    const result = await response.text();
    alert(result); // Muestra el mensaje de respuesta
}

// 🔹 Función para obtener todos los usuarios y mostrarlos en la consola
async function obtenerUsuarios() {
    const response = await fetch(`${API_URL}?accion=obtener`);
    const usuarios = await response.json();
    console.log(usuarios);
}

// 🔹 Función para eliminar usuario
async function eliminarUsuario(id) {
    const data = new FormData();
    data.append("accion", "eliminar");
    data.append("id", id);

    const response = await fetch(API_URL, {
        method: "POST",
        body: data,
    });

    const result = await response.text();
    alert(result);
}

// 🔹 Función para actualizar usuario
async function actualizarUsuario(id, nombres, correo, celular, contraseña) {
    const data = new FormData();
    data.append("accion", "actualizar");
    data.append("id", id);
    data.append("nombres", nombres);
    data.append("correo", correo);
    data.append("celular", celular);
    data.append("contraseña", contraseña);

    const response = await fetch(API_URL, {
        method: "POST",
        body: data,
    });

    const result = await response.text();
    alert(result);
}
