import { useEffect, useState } from "react";

import { getGames } from "./services/gameService";

import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import GameList from "./components/GameList";
import GameDetail from "./components/GameDetail";
import Welcome from "./components/Welcome";
import FloatingCart from "./components/FloatingCart";



function App() {


    const [games, setGames] = useState([]);

    const [search, setSearch] = useState("");

    const [cart, setCart] = useState([]);

    const [favorites, setFavorites] = useState([]);

    const [selectedGame, setSelectedGame] = useState(null);

    const [entered, setEntered] = useState(false);





    useEffect(()=>{


        getGames()
        .then((data)=>{

            setGames(data);

        });


    },[]);





    const addCart = (game)=>{


        const exists = cart.some(
            item => item.id === game.id
        );


        if(!exists){


            setCart([

                ...cart,
                game

            ]);


        }


    };





    const addFavorite = (game)=>{


        const exists = favorites.some(
            item => item.id === game.id
        );



        if(exists){


            setFavorites(

                favorites.filter(
                    item => item.id !== game.id
                )

            );


        }

        else{


            setFavorites([

                ...favorites,
                game

            ]);


        }


    };






    const filteredGames = games.filter((game)=>


        game.nombre
        .toLowerCase()
        .includes(
            search.toLowerCase()
        )


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

        />



        <FloatingCart

            cart={cart}

        />





        <div className="container mt-4">





        {

        !selectedGame &&

        (

            <>


            <h1 className="text-center mb-4">

                🎮 MercaGaming

            </h1>




            <SearchBar

                search={search}

                setSearch={setSearch}

            />





            <GameList

                games={filteredGames}

                addCart={addCart}

                addFavorite={addFavorite}

                favorites={favorites}

                setSelectedGame={setSelectedGame}

            />



            </>


        )

        }





        {

        selectedGame &&

        (

            <GameDetail

                game={selectedGame}

                addCart={addCart}

                closeDetail={()=>setSelectedGame(null)}

            />


        )

        }





        </div>



        </>


    );


}



export default App;