<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = strip_tags(trim($_POST["nombre"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $mensaje = trim($_POST["mensaje"]);

    // Validación básica (puedes agregar más validaciones)
    if (empty($nombre) || empty($mensaje) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo "Por favor, completa todos los campos correctamente.";
        exit;
    }

    $destinatario = "contacto@anupro360.com"; // Tu dirección de correo electrónico
    $asunto = "Nuevo mensaje desde el formulario de contacto de Anupro360";
    $cuerpo_correo = "Nombre: $nombre\n";
    $cuerpo_correo .= "Correo Electrónico: $email\n\n";
    $cuerpo_correo .= "Mensaje:\n$mensaje\n";

    $cabeceras = "From: $nombre <$email>\r\n";
    $cabeceras .= "Reply-To: $email\r\n";

    // Envío del correo electrónico
    if (mail($destinatario, $asunto, $cuerpo_correo, $cabeceras)) {
        http_response_code(200);
        echo "¡Gracias! Tu mensaje ha sido enviado correctamente.";
    } else {
        http_response_code(500);
        echo "Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.";
    }
} else {
    http_response_code(403);
    echo "Hubo un problema con tu envío, por favor intenta de nuevo.";
}
?>