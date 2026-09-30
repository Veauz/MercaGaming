import { FaShoppingCart, FaHeart } from "react-icons/fa";


function Navbar({ cart, favorites, abrirCompra }) {


    const total = cart.reduce(
        (acc, game) => acc + game.precio,
        0
    );


    return (


        <nav className="navbar navbar-dark bg-dark px-4">


            <span className="navbar-brand">
                🎮 MercaGaming
            </span>




            <div className="d-flex gap-4 text-white">



                {/* CARRITO */}


                <div className="menu-hover">


                    <span>
                        <FaShoppingCart />
                        {" "}
                        Carrito: {cart.length}
                    </span>




                    <div className="menu-box">


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


                                <p key={game.id}>

                                    {game.nombre}

                                    <br/>

                                    ${game.precio}

                                </p>


                            ))

                        }




                        <hr/>


                        <strong>
                            Total: ${total}
                        </strong>



                        {
                            cart.length > 0 &&


                            <button
                                className="btn btn-success mt-3 w-100"
                                onClick={abrirCompra}
                            >

                                ✅ Finalizar compra

                            </button>


                        }



                    </div>



                </div>






                {/* FAVORITOS */}



                <div className="menu-hover">



                    <span>

                        <FaHeart />

                        {" "}

                        Favoritos: {favorites.length}

                    </span>





                    <div className="menu-box">


                        <h5>
                            ⭐ Favoritos
                        </h5>





                        {
                            favorites.length === 0 ?


                            <p>
                                Sin favoritos
                            </p>


                            :


                            favorites.map((game)=>(


                                <p key={game.id}>

                                    {game.nombre}

                                </p>


                            ))

                        }



                    </div>




                </div>




            </div>



        </nav>


    )


}


export default Navbar;