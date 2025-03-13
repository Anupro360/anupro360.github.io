document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Asegúrate de que esta línea esté presente
    const codigo = document.getElementById('codigo').value;
    console.log('Código ingresado:', codigo);

    fetch('https://script.google.com/macros/s/AKfycbzXyjQySAS-dmkdqW_rpXWlbbIDNAgCM7nO_IawM6FyNl2NqzyjBU7qqSaAiPnqtT_w/exec?codigo=' + codigo)
        .then(response => response.json())
        .then(data => {
            console.log('Datos recibidos:', data);
            const resultadoDiv = document.getElementById('resultado');
            if (data.error) {
                resultadoDiv.textContent = data.error;
            } else {
                resultadoDiv.innerHTML = `
                    <p>Nombre: ${data.nombre}</p>
                    <p>Rut: ${data.rut}</p>
                    <p>Capacitación: ${data.capacitacion}</p>
                    <p>Equipo 1: ${data.equipo1}</p>
                    <p>Equipo 2: ${data.equipo2}</p>
                    <p>Equipo 3: ${data.equipo3}</p>
                    <p>Equipo 4: ${data.equipo4}</p>
                    <p>Fecha inicio: ${data.fechaInicio}</p>
                    <p>Fecha Termino: ${data.fechaTermino}</p>
                    <p>Titulado: ${data.titulado}</p>
                `;
            }
        })
        .catch(error => {
            console.error("Error al obtener los datos:", error);
            console.log('Error:', error);
            document.getElementById('resultado').textContent = 'Ocurrió un error al verificar el código.';
        });
});