const API = "http://localhost:3001";

// OBTENER USUARIOS
export async function getUsers() {
    const response = await fetch(`${API}/users`);

    if (!response.ok) {
        throw new Error("No se pudieron cargar los usuarios");
    }

    return response.json();
}

// OBTENER FAVORITOS DE UN USUARIO
export async function getFavorites(userId) {
    const response = await fetch(
        `${API}/favorites?userId=${encodeURIComponent(userId)}`
    );

    if (!response.ok) {
        throw new Error("No se pudieron cargar los favoritos");
    }

    return response.json();
}

// GUARDAR FAVORITO
export async function saveFavorite(userId, gameId) {
    const response = await fetch(`${API}/favorites`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            userId,
            gameId
        })
    });

    if (!response.ok) {
        throw new Error("No se pudo guardar el favorito");
    }

    return response.json();
}

// ELIMINAR FAVORITO
export async function deleteFavorite(favoriteId) {
    const response = await fetch(
        `${API}/favorites/${encodeURIComponent(favoriteId)}`,
        {
            method: "DELETE"
        }
    );

    if (!response.ok) {
        throw new Error("No se pudo eliminar el favorito");
    }
}