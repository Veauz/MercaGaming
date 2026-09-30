import { FaShoppingCart } from "react-icons/fa";


function FloatingCart({cart, removeCart}) {


    const total = cart.reduce(
        (acc, game) => acc + game.precio,
        0
    );


    return (

        <div className="floating-cart">


            <FaShoppingCart />


            <span>
                {cart.length}
            </span>



            <div className="floating-cart-box">


                <h5>
                    🛒 Carrito
                </h5>



                {
                    cart.length === 0 ?

                    <p>
                        Vacío
                    </p>


                    :


                    cart.map((game)=>(

                        <div key={game.id}>
                            {game.nombre}
                            <br/>
                            ${game.precio}
                            <button
                                type="button"
                                className="btn btn-sm btn-outline-danger ms-2"
                                onClick={() => removeCart(game.id)}
                            >
                                Eliminar
                            </button>
                        </div>

                    ))

                }



                <hr/>


                <strong>
                    Total: ${total}
                </strong>


            </div>



        </div>

    );


}


export default FloatingCart;