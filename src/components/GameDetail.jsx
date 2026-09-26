function GameDetail({ game, addCart, closeDetail }) {


return (

<div
className="position-fixed top-0 start-0 w-100 h-100 detail-animation"
style={{
    backgroundImage:`
    linear-gradient(
        rgba(0,0,0,.75),
        rgba(0,0,0,.75)
    ),
    url(${game.fondo})
    `,
    backgroundSize:"cover",
    backgroundPosition:"center",
    zIndex:"1000"
}}
>


<div className="container h-100 d-flex align-items-center">


<div className="row w-100 align-items-center text-white">


<div className="col-md-5 text-center">


<img
src={game.imagen}
alt={game.nombre}
className="img-fluid rounded shadow portada"
/>


</div>



<div className="col-md-7">


<h1 className="display-3">
{game.nombre}
</h1>


<h3>
🎮 {game.genero}
</h3>


<h2>
${game.precio}
</h2>


<p className="fs-5">
{game.descripcion}
</p>



<button
className="btn btn-success btn-lg me-3"
onClick={()=>addCart(game)}
>
🛒 Comprar
</button>



<button
className="btn btn-light btn-lg"
onClick={closeDetail}
>
⬅ Volver
</button>


</div>


</div>


</div>


</div>


)


}


export default GameDetail;