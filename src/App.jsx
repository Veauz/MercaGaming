import { useEffect, useState } from "react";

import { getGames } from "./services/gameService";

import {
    getUsers,
    getFavorites,
    saveFavorite,
    deleteFavorite
} from "./services/userService";

import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import SearchBar from "./components/SearchBar";
import FilterBar from "./components/FilterBar";
import GameList from "./components/GameList";
import GameDetail from "./components/GameDetail";
import Cart from "./components/Cart";
import FloatingCart from "./components/FloatingCart";

function App() {
const [compraRealizada,setCompraRealizada] = useState(false);

const [games, setGames] = useState([]);

const [search, setSearch] = useState("");

const [filtro, setFiltro] = useState("Todos");


const [cart, setCart] = useState([]);


const [selectedGame, setSelectedGame] = useState(null);

const [entered, setEntered] = useState(false);



const [users, setUsers] = useState([]);

const [currentUserId, setCurrentUserId] = useState("1");



const [favoriteRecords, setFavoriteRecords] = useState([]);

const [savingFavorite, setSavingFavorite] = useState(false);

const [loadingFavorites, setLoadingFavorites] = useState(true);

const [serverError, setServerError] = useState("");

const [checkout, setCheckout] = useState(false);

const favorites = favoriteRecords;



// =======================
// CARGAR JUEGOS
// =======================

useEffect(()=>{


    getGames()

    .then((data)=>{

        setGames(data);

    })

    .catch(console.error);


},[]);




// =======================
// CARGAR USUARIOS
// =======================

useEffect(()=>{


    getUsers()

    .then((data)=>{

        setUsers(data);

    })

    .catch(console.error);


},[]);




// =======================
// CARGAR FAVORITOS
// =======================

useEffect(()=>{


    console.log(
        "USUARIO ACTUAL:",
        currentUserId
    );


    getFavorites(currentUserId)

    .then((datos)=>{


        console.log(
            "FAVORITOS DEL USUARIO:",
            datos
        );


        setFavoriteRecords(datos);


    })


    .catch((error)=>{


        console.error(error);


    })


    .finally(()=>{


        setLoadingFavorites(false);


    });


},[currentUserId]);





// =======================
// CARRITO
// =======================


const addCart = (game)=>{


    setCart((actual)=>{


        const existe = actual.some(

            (item)=>
            String(item.id) === String(game.id)

        );


        if(existe){

            return actual;

        }


        return [
            ...actual,
            game
        ];


    });


};




const removeCart = (id)=>{


    setCart((actual)=>
        actual.filter(

            (game)=>
            String(game.id)!==String(id)

        )

    );


};

const finalizarCompra = () => {

    setCompraRealizada(true);

    setTimeout(() => {
        setCart([]);
        setCheckout(false);
        setCompraRealizada(false);
    }, 3000);

};






// =======================
// FAVORITOS
// =======================


const addFavorite = async(game)=>{


    if(savingFavorite)
        return;



    setSavingFavorite(true);



    try{


        const userId = String(currentUserId);



        const registros =
        await getFavorites(userId);



        const existe = registros.filter(

            (item)=>
            String(item.gameId)
            ===
            String(game.id)

        );



        if(existe.length > 0){


            await Promise.all(

                existe.map(

                    item =>
                    deleteFavorite(item.id)

                )

            );


        }else{


            await saveFavorite(
                userId,
                game.id
            );


        }




        const actualizados =
        await getFavorites(userId);



        setFavoriteRecords(actualizados);



    }catch(error){


        console.error(
            "ERROR FAVORITO:",
            error
        );


        alert(
            "No se pudo actualizar el favorito"
        );


    }finally{


        setSavingFavorite(false);


    }


};





const cambiarUsuario = (nuevoUsuario)=>{


    setFavoriteRecords([]);

    setServerError("");

    setLoadingFavorites(true);


    setCurrentUserId(nuevoUsuario);


};





const etiquetas = [

    ...new Set(

        games.flatMap(

            game =>
            game.etiquetas || []

        )

    )

].sort();






const filteredGames = games.filter((game)=>{


    const coincideNombre =
    game.nombre

    .toLowerCase()

    .includes(
        search.toLowerCase()
    );



    const coincideEtiqueta =

    filtro==="Todos"

    ||

    (game.etiquetas || [])
    .includes(filtro);

    return coincideNombre && coincideEtiqueta;


});

const totalCompra = cart.reduce(
    (acc, game) => acc + game.precio,
    0
);

if(!entered){


    return (

        <Welcome
            enter={()=>setEntered(true)}
        />

    );


}






return (

<>


<Navbar

cart={cart}

favorites={favorites}

abrirCompra={()=>setCheckout(true)}

/>




<div className="container mt-4">



{

!selectedGame ?


<>


<h1 className="text-center mb-4">

🎮 MercaGaming

</h1>




<div className="mb-4">


<label className="form-label">

Usuario de demostración

</label>



<select

className="form-select"

value={currentUserId}

disabled={
savingFavorite ||
loadingFavorites
}


onChange={(e)=>
cambiarUsuario(
e.target.value
)
}


>


{

users.map((user)=>(


<option

key={user.id}

value={user.id}

>

{user.nombre}

</option>


))

}


</select>


</div>





{
serverError &&


<div className="alert alert-danger">


{serverError}


</div>


}







<div className="row mb-4">


<div className="col-md-8 mb-3">


<SearchBar

search={search}

setSearch={setSearch}

/>


</div>



<div className="col-md-4 mb-3">


<FilterBar

etiquetas={etiquetas}

filtro={filtro}

setFiltro={setFiltro}

/>


</div>



</div>







{
loadingFavorites &&

<p className="text-info">

Recuperando favoritos...

</p>

}







<GameList

games={filteredGames}

favorites={favoriteRecords}

addFavorite={addFavorite}

addCart={addCart}

setSelectedGame={setSelectedGame}

/>





</>


:


<GameDetail

game={selectedGame}

addCart={addCart}

closeDetail={()=>
setSelectedGame(null)
}

/>


}





</div>





<FloatingCart

cart={cart}

/>


{checkout && (

<div className="container mt-5">

    {!compraRealizada ? (

        <div className="card p-4 shadow">

            <h2>
                🛒 Finalizar compra
            </h2>

            <input
                className="form-control mb-3"
                placeholder="Nombre completo"
            />

            <input
                className="form-control mb-3"
                placeholder="Correo electrónico"
            />

            <input
                className="form-control mb-3"
                placeholder="Dirección"
            />

            <h4>
                Total: ${totalCompra}
            </h4>

            <button
                className="btn btn-success"
                onClick={finalizarCompra}
            >
                Confirmar compra
            </button>

        </div>

    ) : (

        <div className="text-center mt-5">

            <h1 style={{fontSize:"100px"}}>
                👍
            </h1>

            <h2>
                ¡Compra realizada!
            </h2>

        </div>

    )}

</div>

)}




</>

);


}


export default App;