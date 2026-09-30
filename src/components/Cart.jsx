import { saveOrder } from "../orderService";


function Cart({ cart, removeCart, setCart }) {


    const total = cart.reduce(
        (acc, game) => acc + game.precio,
        0
    );


    const finalizarCompra = async () => {


        const nuevaOrden = {

            usuario: "Ignacio",

            juegos: cart.map((game) => ({

                id: game.id,
                nombre: game.nombre,
                precio: game.precio

            })),

            total: total,

            fecha: new Date().toLocaleDateString()

        };


        try {


            await saveOrder(nuevaOrden);


            alert("Compra realizada correctamente ✅");


            setCart([]);


        } catch (error) {


            console.error(error);

            alert("No se pudo realizar la compra");


        }


    };



    return (

        <div className="container mt-5">


            <h2>
                🛒 Carrito
            </h2>



            {
                cart.length === 0 ? (

                    <p>
                        El carrito está vacío.
                    </p>


                ) : (


                    cart.map((game) => (


                        <div
                            key={game.id}
                            className="card mb-3 p-3"
                        >


                            <h4>
                                {game.nombre}
                            </h4>


                            <p>
                                ${game.precio}
                            </p>



                            <button
                                className="btn btn-danger"
                                onClick={() => removeCart(game.id)}
                            >

                                Eliminar

                            </button>



                        </div>


                    ))


                )

            }




            <h3>
                Total: ${total}
            </h3>



            <button
                className="btn btn-success"
                onClick={finalizarCompra}
                disabled={cart.length === 0}
            >

                Finalizar compra

            </button>



        </div>

    );


}


export default Cart;