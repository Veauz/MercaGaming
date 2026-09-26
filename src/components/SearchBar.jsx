function searchBar({search, setSearch}) {
    return (
        <div className="mb-4">
            <input
            type="text"
            className="form-control"
            placeholder="Buscar juego..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            />
        </div>
    )
}
export default searchBar;