import GameCard from "./GameCard";

function GameList({ games, addCart, addFavorite, favorites, setSelectedGame }) {
    return (
        <div className="row">
            {games.map((game) => (
                <GameCard
                key={game.id}
                game={game}
                addCart={addCart}
                addFavorite={addFavorite}
                favorites={favorites}
                setSelectedGame={setSelectedGame}
/>
            ))}
        </div>
    );
}

export default GameList;