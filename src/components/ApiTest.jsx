import { useState } from "react";

function ApiTest() {
    const [usuarios, setUsuarios] = useState([]);
    const [error, setError] = useState("");

    const obtenerUsuarios = async () => {
        try {
            setError("");

            const respuesta = await fetch(
                "http://localhost:3001/users"
            );

            if (!respuesta.ok) {
                throw new Error("Error al consultar el servidor");
            }

            const datos = await respuesta.json();

            setUsuarios(datos);

        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="mb-4">
            <button
                className="btn btn-primary"
                onClick={obtenerUsuarios}
            >
                Probar conexión al servidor
            </button>

            {usuarios.map((usuario) => (
                <p key={usuario.id} className="mt-2">
                    {usuario.nombre}
                </p>
            ))}

            {error && <p className="text-danger">{error}</p>}
        </div>
    );
}

export default ApiTest;