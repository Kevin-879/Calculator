async function calculate(operation) {
    const a = document.getElementById('a').value;
    const b = document.getElementById('b').value;
    let port;

    // Asignar el puerto según la operación
    switch (operation) {
        case 'suma':
            port = 3001;
            break;
        case 'resta':
            port = 3002;
            break;
        case 'multiplicacion':
            port = 3003;
            break;
        case 'division':
            port = 3004;
            break;
        default:
            console.log('Operación no válida');
            return;
    }

    try {
        const response = await fetch(`http://localhost:${port}/${operation}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ a: Number(a), b: Number(b) })
        });

        const data = await response.json();
        if (data.result !== undefined) {
            document.getElementById('result').textContent = `Resultado: ${data.result}`;
        } else if (data.error) {
            document.getElementById('result').textContent = `Error: ${data.error}`;
        }
    } catch (error) {
        document.getElementById('result').textContent = `Error: No se pudo conectar con el servidor`;
    }
}