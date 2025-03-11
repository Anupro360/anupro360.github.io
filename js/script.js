document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();
    const codigo = document.getElementById('codigo').value;
    // Aquí puedes agregar la lógica para verificar el código
    // Por ejemplo, puedes enviar el código a un servidor para validarlo
    if (codigo === '1234') { // Ejemplo: código de verificación fijo
        document.getElementById('resultado').textContent = 'Código válido.';
    } else {
        document.getElementById('resultado').textContent = 'Código inválido.';
    }
});https://docs.google.com/spreadsheets/d/e/2PACX-1vSpOcyDvHsUh8jtZDNt_jKXBuZBz9zms_KaUL0TfKCRvLfAkj5q17Ooudgyqq0RjWVTWDBjyCFFX7IS/pub?gid=0&single=true&output=csv