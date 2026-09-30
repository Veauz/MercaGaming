import { FaHeart, FaShoppingCart } from "react-icons/fa";


function GameCard({game, addCart, addFavorite, favorites, setSelectedGame}) {

console.log("Juego:", game.nombre);
console.log("Favoritos recibidos:", favorites);
console.log("CARD", game.nombre, favorites);
    return (

        <div className="col-md-4 mb-4 game-card-animation">

            <div className="card h-100 shadow">


                <img
                    src={game.imagen}
                    className="card-img-top"
                    alt={game.nombre}
                />


                <div className="card-body">


                    <h5 className="card-title">
                        {game.nombre}
                    </h5>


                    <p className="card-text">
                        Género: {game.genero}
                    </p>
                    <div className="game-tags mb-3">
                        {game.etiquetas?.map((etiqueta) => (
                            <span
                            key={etiqueta}
                             className="game-tag"
                              >
                                 {etiqueta}
                                 </span>
                                 ))}
                                 </div>


                    <p className="fw-bold">
                        ${game.precio}
                    </p>


                    <button
                        className="btn btn-primary me-2"
                        onClick={() => setSelectedGame(game)}
                    >
                        Ver detalle
                    </button>


                    <button
                        className="btn btn-success me-2"
                        onClick={() => addCart(game)}
                    >
                        <FaShoppingCart />
                        {" "}
                        Comprar
                    </button>


                   <button
                   className={`btn ${
                    favorites.some(
    item => String(item.gameId) === String(game.id)
)

                    ? "btn-danger"
                    : "btn-outline-danger"
                    }`}
                    onClick={()=>addFavorite(game)}
                    >
                        <FaHeart/>
                        </button>


                </div>

            </div>

        </div>

    )

}


export default GameCard;