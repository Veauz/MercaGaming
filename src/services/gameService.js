export const getGames = () => {

    return new Promise((resolve) => {

        setTimeout(() => {

            resolve([
                {
                    id: 1,
                    nombre: "Far Cry 6",
                    genero: "Acción",
                    precio: 49990,
                    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTYcX6EDrrAexIwlhs0MPWuu8NLLVzJ1SgXmyktGs34Q&s=10",
                    fondo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrobtu1eTik970XrO6cxlllNPioXkCLLKRs2eQE5FJe3G7Kiq5prLVB8Eu&s=10",
                    descripcion: "Juego de mundo abierto con combates y exploración."
},
                {
                    id: 2,
                    nombre: "God of War Ragnarok",
                    genero: "Acción",
                    precio: 59990,
                    imagen:"https://gmedia.playstation.com/is/image/SIEPDC/god-of-war-ragnarok-store-art-01-10sep21$ru?$native$",
                    fondo:"https://wallpaper.forfun.com/fetch/42/425b8ccb09aaf7b6621d389400e22e15.jpeg",
                    descripcion: "Aventura épica de Kratos y Atreus."
                    
                   
                },

                {
                    id: 3,
                    nombre: "Minecraft",
                    genero: "Sandbox",
                    precio: 29990,
                    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH5u_9VKxckX_4sHMQe3_chPAN4ZjRtTTq98Z8cSRwLw&s",
                    fondo: "https://www.infobae.com/resizer/v2/QPH775I5PZGHFPTLKR5QZSA7YY.jpg?auth=ca5ffdc0f921473c718a76281bb48c2c4faf199edfc501c8da8ff9dbd4494e01&smart=true&width=1200&height=1200&quality=85",
                    descripcion: "Construye y explora mundos infinitos."
                },

                {
                    id: 4,
                    nombre: "Cyberpunk 2077",
                    genero: "RPG",
                    precio: 39990,
                    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6rqWc1WwhLnl_Sq2GP1A5WFgilKCofRE8y8seiwwt-g&s=10",
                    fondo: "https://static.independentespanol.com/2020/12/08/10/newFile-4.jpg",
                    descripcion: "Explora Night City en una aventura futurista."
                }
            ])

        },1000)

    })

}