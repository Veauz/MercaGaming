function Cart({cart, removeCart}) {


const total = cart.reduce(
    (acc, game)=> acc + game.precio,
    0
);

return (
<div className="container mt-5">


<h2>
🛒 Carrito
</h2>


{
cart.map((game)=>(
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
onClick={()=>removeCart(game.id)}
>
Eliminar
</button>


</div>

))
}



<h3>
Total: ${total}
</h3>


</div>

)


}


export default Cart;