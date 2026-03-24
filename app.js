let itemMusica = document.createElement('li')
let imgFundo = document.body.style.backgroundImage = "url('imgs/fundo+.svg')"
let imgAlbum = document.querySelector('.imgAlbum')
let listaMusicas = document.querySelector('.listaMusicas')

const listaAlbuns = [
    {
        fundo: "url('imgs/fundo+.svg')",
        capa: "imgs/+EdSheeran.jpg",
        musicas: [
            "The A Team", "Drunk", "U.N.I.", "Grade 8", 
            "Wake Me Up", "Small Bump", "This", "The City", 
            "Lego House", "You Need Me, I Don't Need You", "Kiss Me", "Give Me Love"
        ]
    },

    {
        fundo: "url('imgs/fundoX.svg')",
        capa: "imgs/X_cover.png",
        musicas: [
            "One", "I'm a Mess", "Sing", "Don't", 
            "Nina", "Photograph", "Bloodstream", "Tenerife Sea", 
            "Runaway", "The Man", "Thinking Out Loud", "Afire Love"
        ]
    },

    {
        fundo: "url('imgs/fundodivide.svg')",
        capa: "imgs/Ed_Sheeran_-_Divide.png",
        musicas: [
            "Eraser", "Castle on the Hill", "Dive", "Shape of You",
            "Perfect", "Galway Girl", "Happier", "New Man",
            "Hearts Don't Break Around Here", "What Do I Know?",
            "How Would You Feel (Paean)", "Supermarket Flowers"

        ]
    },

    {
        fundo: "url('imgs/fundo=.svg')",
        capa: "imgs/Equals_-_Ed_Sheeran.png",
        musicas: [
            "Tides", "Shivers", "First Times", "Bad Habits",
            "Overpass Graffiti", "The Joker And The Queen",
            "Leave Your Life", "Collide", "2step", "Stop The Rain",
            "Love In Slow Motion", "Visiting Hours", "Sandman", "Be Right Now"
        ]
    },

    {
        fundo: "url('imgs/fundo-.svg')",
        capa: "imgs/Ed_Sheeran_-_Subtract.png",
        musicas: [
            "Boat", "Salt Water", "Eyes Closed", "Life Goes On",
            "Dusty", "End Of Youth", "Colourblind", "Curtains",
            "Borderline", "Spark", "Vega", "Sycamore", "No Strings", "The Hills of Aberfeldy"
        ]
    },

    {
        fundo: "url('imgs/fundoplay.svg')",
        capa: "imgs/Ed_Sheeran_-_Play.png",
        musicas: ["Opening", "Azizam", "Old Phone", "Symmetry",
             "Camera", "In Other Words", "A Little More", "Slowly",
            "Don't Look Down", "The Vow", "For Always", "Heaven", 
            "Problems", "War Game", "Regrets", "Freedom", 
            "Skeletons", "Technicoulor"
        ]
    }
]

let contador = 0

function proximo() {
    listaMusicas.innerHTML = ""
    contador++
    if (contador > listaAlbuns.length - 1) {
        contador = 0
    }

    imgFundo = document.body.style.backgroundImage = listaAlbuns[contador].fundo
    imgAlbum.src = listaAlbuns[contador].capa

    //Usar for para trocar a lista de músicas
    for (let i = 0; i < listaAlbuns[contador].musicas.length; i++) {
        let itemMusica = document.createElement('li')
        itemMusica.innerText = listaAlbuns[contador].musicas[i]
        listaMusicas.append(itemMusica)
    }
}

function anterior() {
    listaMusicas.innerHTML = ""
    contador--
    if (contador < 0) {
        contador = listaAlbuns.length - 1
    }

    imgFundo = document.body.style.backgroundImage = listaAlbuns[contador].fundo
    imgAlbum.src = listaAlbuns[contador].capa

    for (let i = 0; i < listaAlbuns[contador].musicas.length; i++) {
        let itemMusica = document.createElement('li')
        itemMusica.innerText = listaAlbuns[contador].musicas[i]
        listaMusicas.append(itemMusica)
    }
}