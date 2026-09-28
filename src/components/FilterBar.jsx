function FilterBar({ etiquetas, filtro, setFiltro }) {
    return (
        <select
            className="form-select"
            value={filtro}
            onChange={(e) => setFiltro(e.target.value)}
        >
            <option value="Todos">
                Todas las etiquetas
            </option>

            {etiquetas.map((etiqueta) => (
                <option key={etiqueta} value={etiqueta}>
                    {etiqueta}
                </option>
            ))}
        </select>
    );
}

export default FilterBar;