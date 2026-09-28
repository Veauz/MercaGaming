export const getGames = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          nombre: "Far Cry 6",
          genero: "Acción",
          etiquetas: ["Acción", "Aventura", "Mundo abierto","FPS", "Shooter"],
          precio: 49990,
          imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTYcX6EDrrAexIwlhs0MPWuu8NLLVzJ1SgXmyktGs34Q&s=10",
          fondo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrobtu1eTik970XrO6cxlllNPioXkCLLKRs2eQE5FJe3G7Kiq5prLVB8Eu&s=10",
          descripcion: "Juego de mundo abierto con combates y exploración."
        },
        {
          id: 2,
          nombre: "God of War Ragnarok",
          genero: "Acción",
          etiquetas: ["Acción", "Aventura","Mundo abierto","RPG","Mitología"],
          precio: 59990,
          imagen: "https://gmedia.playstation.com/is/image/SIEPDC/god-of-war-ragnarok-store-art-01-10sep21$ru?$native$",
          fondo: "https://wallpaper.forfun.com/fetch/42/425b8ccb09aaf7b6621d389400e22e15.jpeg",
          descripcion: "Aventura épica de Kratos y Atreus."
        },
        {
          id: 3,
          nombre: "Minecraft",
          genero: "Sandbox",
          etiquetas: ["Sandbox", "Construcción", "Exploración"],
          precio: 29990,
          imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH5u_9VKxckX_4sHMQe3_chPAN4ZjRtTTq98Z8cSRwLw&s",
          fondo: "https://www.infobae.com/resizer/v2/QPH775I5PZGHFPTLKR5QZSA7YY.jpg?auth=ca5ffdc0f921473c718a76281bb48c2c4faf199edfc501c8da8ff9dbd4494e01&smart=true&width=1200&height=1200&quality=85",
          descripcion: "Construye y explora mundos infinitos."
        },
        {
          id: 4,
          nombre: "Cyberpunk 2077",
          genero: "RPG",
          etiquetas: ["RPG", "Ciencia ficción", "Mundo abierto"],
          precio: 39990,
          imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6rqWc1WwhLnl_Sq2GP1A5WFgilKCofRE8y8seiwwt-g&s=10",
          fondo: "https://static.independentespanol.com/2020/12/08/10/newFile-4.jpg",
          descripcion: "Explora Night City en una aventura futurista."
        },
        {
          id: 5,
          nombre: "The Legend of Zelda: Breath of the Wild",
          genero: "Aventura",
          etiquetas: ["Aventura", "Mundo abierto", "Exploración", "Puzzles", "Acción"],
          precio: 69990,
          imagen: "https://i0.wp.com/leveleando.com/wp-content/uploads/2018/01/zelda_bowt_imagen.jpg?ssl=1",
          fondo: "https://imagenes.hobbyconsolas.com/files/image_1920_1080/uploads/imagenes/2023/04/25/690209404718f.jpeg",
          descripcion: "Explora el mundo de Hyrule en una aventura épica."
        },
        {
            id: 6,
            nombre: "Resident Evil Village",
            genero: "Survival Horror",
            etiquetas: ["Survival Horror", "Terror", "Mundo abierto"],
            precio: 49990,
            imagen: "https://pressover.news/wp-content/uploads/2021/05/Resident_Evil_8_Village_poster.png",
            fondo: "https://preview.redd.it/resident-evil-8-village-ps5-1080p-wallpaper-iv-v0-4lf1onhuuc451.png?auto=webp&s=d15123f3023a11bee3cddbca02580bcd66e51490",
            descripcion: "Sobrevive en un pueblo lleno de horrores."
        },
        {
            id: 7,
            nombre: "Horizon Forbidden West",
            genero: "Acción/Aventura",
            etiquetas: ["Acción", "Aventura", "Mundo abierto"],
            precio: 59990,
            imagen: "https://tiempogamer.com/wp-content/uploads/2024/03/Horizon-forbidden-west-collectors-edition-homepage-banner-keyart-01-en-23aug-23.webp",
            fondo: "https://i.imgur.com/JHdEy5j.jpg",
            descripcion: "Explora un mundo post-apocalíptico lleno de máquinas."
        },
        {
            id: 8,
            nombre: "Assassin's Creed Valhalla",
            genero: "Acción/Aventura",
            etiquetas: ["Acción", "Aventura", "Mundo abierto"],
            precio: 49990,
            imagen: "https://i.redd.it/vujvfv067f581.jpg",
            fondo: "https://cdn.loaded.com/media/catalog/product/a/s/assassins_creed_valhalla_deluxe_edition_xbox_one_xbox_series_x_s_uk_img_1.jpg",
            descripcion: "Sumérgete en la historia de los vikingos en una épica aventura."
        },
        {
            id: 9,
            nombre: "The Witcher 3: Wild Hunt",
            genero: "RPG",
            etiquetas: ["RPG", "Fantasía", "Mundo abierto"],
            precio: 39990,
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_6NoFtGG1ldmOkuovbTeXeJ36N2Ndno4MxfR3mRzUzMP5aBXKlkRYWWqv&s=10",
            fondo: "https://i.redd.it/5vax2xu1hpz41.jpg",
        },
        {
            id: 10,
            nombre: "Grand Theft Auto V",
            genero: "Acción",
            etiquetas: ["Acción", "Mundo abierto","modo multijugador", "FPS", "modo historia"],
            precio: 49990,
            imagen: "https://wallpapers.com/images/featured/4k-gta-5-vlf28u7bbs12essb.jpg",
            fondo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRADq9rUAzZzSagLFx_ftTVXiS10950qvi89jGGSqMiqARjQcw9whTUV1FD&s=10",  
            descripcion: "Explora el mundo de Los Santos en una épica aventura."
        },
        {
            id: 11,
            nombre: "Call of Duty: Modern Warfare II",
            genero: "FPS",
            etiquetas: ["FPS", "Shooter", "Modo multijugador"],
            precio: 59990,
            imagen: "https://areajugones.sport.es/wp-content/uploads/2021/11/call-of-duty-modern-warfare-ii-1-470x588.jpg.webp",
            fondo: "https://wallpapers.com/images/featured/modern-warfare-2-mx86e2utllwc2x3q.jpg",
        },
        {
            id: 12,
            nombre: "Elden Ring",
            genero: "RPG",
            etiquetas: ["RPG", "Fantasía", "Mundo abierto"],
            precio: 59990,
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWCMP8XNrCuoa7s55iU_GVOmRwpD5uvCP6-x1kAMkjXg&s=10",
            fondo: "https://i.pinimg.com/736x/7a/b5/e5/7ab5e50a497693198d6fbaa63368bb2e.jpg",
            descripcion: "Sumérgete en el mundo de Elden Ring en una épica aventura de rol."
        },
        {
            id: 13,
            nombre: "FIFA 24",
            genero: "Deportes",
            etiquetas: ["Deportes", "Fútbol", "Modo multijugador","Competitivo"],
            precio: 49990,
            imagen: "https://img.asmedia.epimg.net/resizer/v2/DVZEYCLKNZD4HLKTZEQF6ACPSY.jpg?auth=4cb9558e11fb5006f8206515d5f0ce94847e0cf598578ade0172d5635b3952d4&width=1472&height=828&smart=true",
            fondo: "https://www.fifacom.com/assets/images/share.jpg",
            descripcion: "Disfruta de la experiencia de fútbol más realista."
        },
        {
            id: 14,
            nombre: "Overwatch 2",
            genero: "FPS",
            etiquetas: ["FPS", "Shooter", "Modo multijugador","Competitivo"],
            precio: 49990,
            imagen: "https://wallpapers.com/images/featured/overwatch-dpacmg5qk3abi7qn.jpg",
            fondo: "https://bnetcmsus-a.akamaihd.net/cms/blog_header/wu/WUEVBTRBRKUE1671214936790.png",
            descripcion: "Únete a la batalla en equipo en un mundo futurista lleno de héroes."
        },
        {
            id: 15,
            nombre: "The Legend of Zelda: Tears of the Kingdom",
            genero: "Aventura",
            etiquetas: ["Aventura", "Mundo abierto", "Exploración", "Puzzles", "Acción"],
            precio: 59990,
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQke-WA3JqOZK5Y8b1qqGiaGO8pTJ2aH2N4NVLfk7I0dTnPUl1_V5ipzQ&s=10",
            fondo: "https://www.zelda.com/assets/images/share.jpg",
            descripcion: "Embárcate en una nueva aventura en el mundo de Hyrule."
        },
        {
            id: 16,
            nombre: "Assassin's Creed Mirage",
            genero: "Aventura",
            etiquetas: ["Aventura", "Mundo abierto", "Exploración", "Puzzles", "Acción"],
            precio: 49990,
            imagen: "https://preview.redd.it/i-made-an-assassins-creed-mirage-wallpaper-from-a-screen-v0-3fixi5bf01tb1.jpg?width=1080&crop=smart&auto=webp&s=9c0cdc2c3859b46c932586fc3c2ffbb44a46df6a",
            fondo: "https://i.redd.it/puo765tsqgn91.png",
            descripcion: "Sumérgete en el mundo de los asesinos en una épica aventura."
        },
        {
            id: 17,
            nombre: "Hogwarts Legacy",
            genero: "Aventura/RPG",
            etiquetas: ["RPG", "Fantasía", "Mundo abierto"],
            precio: 59990,
            imagen: "https://cdn-hogwartslegacy.warnerbrosgames.com/community/slide-07.jpg",
            fondo: "https://i.redd.it/3vdqnt0ays7e1.jpg",
            descripcion: "Explora el mundo mágico de Hogwarts en una aventura épica."
        }
      ]);
    }, 1000);
  });
};
