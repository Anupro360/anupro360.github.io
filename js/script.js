document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();
    const codigo = document.getElementById('codigo').value;
    const urlHojaCalculo = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSpOcyDvHsUh8jtZDNt_jKXBuZBz9zms_KaUL0TfKCRvLfAkj5q17Ooudgyqq0RjWVTWDBjyCFFX7IS/pub?gid=0&single=true&output=csv";

    fetch(urlHojaCalculo)
        .then(response => response.text())
        .then(data => {
            const codigos = data.split("\n").map(codigo => codigo.trim());
            if (codigos.includes(codigo)) {
                document.getElementById('resultado').textContent = 'Código válido.';
            } else {
                document.getElementById('resultado').textContent = 'Código inválido.';
            }
        })
        .catch(error => {
            console.error("Error al cargar la hoja de cálculo:", error);
            document.getElementById('resultado').textContent = 'Ocurrió un error al verificar el código.';
        });
});
