
import { useEffect, useState } from "react";

import { getGames } from "./services/gameService";


import Navbar from "./components/Navbar";

import Welcome from "./components/Welcome";

import SearchBar from "./components/SearchBar";

import FilterBar from "./components/FilterBar";

import GameList from "./components/GameList";

import GameDetail from "./components/GameDetail";

import FloatingCart from "./components/FloatingCart";

function App() {

   

    const [games, setGames] = useState([]);
    const [search, setSearch] = useState("");
    const [filtro, setFiltro] = useState("Todos");

    const [cart, setCart] = useState([]);
    const [favorites, setFavorites] = useState([]);

    const [selectedGame, setSelectedGame] = useState(null);
    const [entered, setEntered] = useState(false);


    

    useEffect(() => {

        getGames()
            .then((data) => {
                setGames(data);
            });

    }, []);


    

    const addCart = (game) => {

        setCart((actual) => {

            const exists = actual.some(
                (item) => item.id === game.id
            );

            if (exists) {
                return actual;
            }

            return [...actual, game];

        });

    };


    

    const removeCart = (id) => {

        setCart((actual) =>
            actual.filter((game) => game.id !== id)
        );

    };


   

    const addFavorite = (game) => {

        setFavorites((actual) => {

            const exists = actual.some(
                (item) => item.id === game.id
            );

            if (exists) {

                return actual.filter(
                    (item) => item.id !== game.id
                );

            }

            return [...actual, game];

        });

    };



    const etiquetas = [
        ...new Set(
            games.flatMap(
                (game) => game.etiquetas || []
            )
        )
    ].sort();


    

    const filteredGames = games.filter((game) => {

        const coincideNombre = game.nombre
            .toLowerCase()
            .includes(search.toLowerCase());

        const coincideEtiqueta =
            filtro === "Todos" ||
            (game.etiquetas || []).includes(filtro);

        return coincideNombre && coincideEtiqueta;

    });


    

    if (!entered) {

        return (
            <Welcome
                enter={() => setEntered(true)}
            />
        );

    }


   

    return (

        <>

            

            <Navbar
                cart={cart}
                favorites={favorites}
            />


            

            <FloatingCart
                cart={cart}
                removeCart={removeCart}
            />


            <div className="container mt-4">

                {!selectedGame ? (

                    <>

                        

                        <h1 className="text-center mb-4">
                            🎮 MercaGaming
                        </h1>


                       

                        <div className="row mb-4 align-items-start">

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


                        

                        {filteredGames.length > 0 ? (

                            <GameList
                                games={filteredGames}
                                addCart={addCart}
                                addFavorite={addFavorite}
                                favorites={favorites}
                                cart={cart}
                                setSelectedGame={setSelectedGame}
                            />

                        ) : (

                            <p className="text-center mt-4">
                                No se encontraron videojuegos.
                            </p>

                        )}

                    </>

                ) : (

                    

                    <GameDetail
                        game={selectedGame}
                        addCart={addCart}
                        closeDetail={() => setSelectedGame(null)}
                    />

                )}

            </div>

        </>

    );

}

export default App;
