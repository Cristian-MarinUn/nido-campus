<?php
$host = "localhost";
$user = "root";  // Cambia esto si usas otro usuario
$password = "";  // Cambia esto si tienes una contraseña
$database = "db-nidocampus";

// Conexión a MySQL
$conn = new mysqli($host, $user, $password, $database);

// Verificar conexión
if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}

// 🔹 Función para crear usuario
function crearUsuario($nombres, $correo, $celular, $contraseña) {
    global $conn;
    $contraseñaHash = password_hash($contraseña, PASSWORD_BCRYPT);
    $sql = "INSERT INTO Usuarios (nombres, correo, celular, contraseña) VALUES (?, ?, ?, ?)";
    
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ssss", $nombres, $correo, $celular, $contraseñaHash);
    
    if ($stmt->execute()) {
        return "Usuario registrado correctamente.";
    } else {
        return "Error al registrar usuario: " . $stmt->error;
    }
}

// 🔹 Función para obtener todos los usuarios
function obtenerUsuarios() {
    global $conn;
    $sql = "SELECT idUsuarios, nombres, correo, celular FROM Usuarios";
    $result = $conn->query($sql);

    $usuarios = [];
    while ($row = $result->fetch_assoc()) {
        $usuarios[] = $row;
    }
    return $usuarios;
}

// 🔹 Función para buscar usuario por ID
function obtenerUsuarioPorId($id) {
    global $conn;
    $sql = "SELECT * FROM Usuarios WHERE idUsuarios = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $id);
    $stmt->execute();
    return $stmt->get_result()->fetch_assoc();
}

// 🔹 Función para actualizar usuario
function actualizarUsuario($id, $nombres, $correo, $celular, $contraseña) {
    global $conn;
    $contraseñaHash = password_hash($contraseña, PASSWORD_BCRYPT);
    $sql = "UPDATE Usuarios SET nombres=?, correo=?, celular=?, contraseña=? WHERE idUsuarios=?";
    
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ssssi", $nombres, $correo, $celular, $contraseñaHash, $id);
    
    if ($stmt->execute()) {
        return "Usuario actualizado correctamente.";
    } else {
        return "Error al actualizar usuario: " . $stmt->error;
    }
}

// 🔹 Función para eliminar usuario
function eliminarUsuario($id) {
    global $conn;
    $sql = "DELETE FROM Usuarios WHERE idUsuarios=?";
    
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $id);
    
    if ($stmt->execute()) {
        return "Usuario eliminado correctamente.";
    } else {
        return "Error al eliminar usuario: " . $stmt->error;
    }
}
?>
