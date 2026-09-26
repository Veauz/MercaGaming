import { useState } from "react";

function Welcome({ enter }) {
    const [start, setStart] = useState(false);

    const handleEnter = () => {
        setStart(true);

        setTimeout(() => {
            enter();
        }, 700);
    };

    return (
        <div className={`welcome ${start ? "launch" : ""}`}>
            <div className="welcome-content">
                <span className="welcome-badge">Bienvenido a</span>
                <h1>🎮 MercaGaming</h1>
                <p>Explora videojuegos, favoritos y ofertas en un solo lugar.</p>
                <button onClick={handleEnter}>Ingresar</button>
            </div>
        </div>
    );
}

export default Welcome;