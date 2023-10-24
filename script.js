class humain {
    constructor(id, pseudo, picture, age, gender, search, region, description) {
        this.id = id
        this.pseudo = pseudo
        this.picture = picture
        this.age = age
        this.gender = gender
        this.search = search
        this.region = region
        this.description = description
    }
    card() {
        let background = this.gender == "Femme" ? "card-body-female" : "card-body-male"
        function goProfile(id) {
            window.location.href = `profil.html?id=${id}`;
        }

        return `
    <div id="card2" class="card col-3 px-0 m-3 text-center shadow border border-3">
        <img src="img/${this.picture}" class="card-img-top" alt="${this.id}">
        <div class="${background}">
            <h5 class="card-title">${this.pseudo}, ${this.age}</h5>
            <button onclick="goProfile(${this.id})" id="btn1" class="btn btn-light"><b>Découvrir</b></button>
        </div>
    </div>
    `
    }
}

const carole = new humain(
    "1",
    "Carole",
    "carole.png",
    "51 ans",
    "Femme",
    "Homme",
    "Franche-Compté",
    "Passionée de rando, j'ai également un penchant pour les petit jeunes ;)"
)

const dani = new humain(
    "2",
    "Daniel",
    "dani.png",
    "46 ans",
    "Homme",
    "Femme",
    "Midi-Pyrénnée",
    "Salut, moi c'est Dani, fan de pétanque et de pastis !"
)
const gilbert = new humain(
    "3",
    "Gilbert",
    "gilbert.png",
    "42 ans",
    "Homme",
    "Femme",
    "Ile-de-France",
    "Bonjour, je suis Gilbert, passioné de musique classique, je suis malvoyant."
)
const hugues = new humain(
    "4",
    "Hughes",
    "hugue.png",
    "38 ans",
    "Homme",
    "Femme",
    "Ile-de-France",
    "Hello world ! Je m'appellen Hugues, je suis développeur Web."
)
const jeanne = new humain(
    "5",
    "Jeanne",
    "jeanne.png",
    "35 ans",
    "Femme",
    "Homme",
    "Ile-de-France",
    "Bonjour, je suis Jeanne, pétillante, je n'ai qu'une passion : les chats !"
)
const bertrand = new humain(
    "6",
    "Bertrand",
    "bertrand.png",
    "50 ans",
    "Homme",
    "Femme",
    "Nord Pas de Calais",
    "Bonjour, je suis Bertrand, entrepreneur d'une PME, et fan de finances."
)
const bruno = new humain(
    "7",
    "Bruno",
    "bruno.png",
    "48 ans",
    "Homme",
    "Femme",
    "Seine-Maritime",
    "Bonjour, je suis Bruno j'adore les animés, de jeux vidéos, et les brocantes !"
)
const christine = new humain(
    "8",
    "Christine",
    "christine.png",
    "44 ans",
    "Femme",
    "Homme et femme",
    "Bretagne",
    "Hello, moi c'est Christine, en harmonie avec la nature, 100% écolo, j'aime le terroir !",
)
const eric = new humain(
    "9",
    "Eric",
    "eric.png",
    "40 ans",
    "Homme",
    "Femme",
    "Picardie",
    "Bonjour, enchanté je suis Eric, j'aime m'asseoir en tailleur pour ecouter du reggae, peace & love.",
)
const abdallah = new humain(
    "10",
    "Abdallah",
    "abdallah.png",
    "42 ans",
    "Homme",
    "Femme",
    "Morbihan",
    "Bonjour, je suis Abdallah, ingénieur en aéronotique.",
)
const amandine = new humain(
    "11",
    "Amandine",
    "amandine.png",
    "37 ans",
    "Femme",
    "Homme et Femme",
    "Isère",
    "Salut je m'appelle Amandine, je cherche l'âme soeur.."
)

const bernadette = new humain(
    "12",
    "Bernadette",
    "bernadette.png",
    "59 ans",
    "Femme",
    "Homme",
    "Aquitaine",
    "Bonjour, je suis Bernadette, je kiffe Netflix & chill :) !"
)
const carine = new humain(
    "13",
    "Carine",
    "carine.png",
    "34 ans",
    "Femme",
    "Homme",
    "Manche",
    "Salut, moi c'est Carine, journaliste, fan de litterature et de série"
)
const jose = new humain(
    "14",
    "José",
    "josé.png",
    "41 ans",
    "Homme",
    "Femme",
    "Haute-Savoie",
    "Salut, je me présente : moi c'est José, restaurateur des montagnes."
)
const julie = new humain(
    "15",
    "Julie",
    "julie.png",
    "46 ans",
    "Femme",
    "Homme",
    "Bouches du Rhone",
    "Coucou, moi c'est Juju. "
)
const marine = new humain(
    "16",
    "Marine",
    "marine.png",
    "34 ans",
    "Femme",
    "Homme",
    "Ile-de-France",
    "Salut, je suis Marine, coach sportive, dynamique et passionée de fitness"
)
const philippe = new humain(
    "17",
    "Philippe",
    "philippe.png",
    "54 ans",
    "Homme",
    "Femme",
    "Rhones-Alpes",
    "Bonjour, moi c'est Philippe, agriculteur, toujours en forme !"
)
const pierre = new humain(
    "18",
    "Pierre",
    "pierre.png",
    "35 ans",
    "Homme",
    "Femme",
    "Loire-et-Cher",
    "Salut je m'appelle Pierre, j'aime le rugby et les bières !"
)
const sandrine = new humain(
    "19",
    "Sandrine",
    "sandrine.png",
    "57 ans",
    "Femme",
    "Homme",
    "Loire-Atlantique",
    "Bonjour, moi c'est Sandrine, je suis passionnée par la cuisine."
)
const silvie = new humain(
    "20",
    "Sylvie",
    "silvie.png",
    "40 ans",
    "Femme",
    "Homme",
    "Gard",
    "Enchantée, je m'appelle Sylvie. Je suis voyage à travers le monde à la recherche de la paix spirituelle."
)

const veronique = new humain(
    "21",
    "Véronique",
    "véronique.png",
    "47 ans",
    "Femme",
    "Homme",
    "Ile-de-France",
    "Salut, je m'appelle Véronique. Je cherche à me débarasser du célibat !"
)
const virginie = new humain(
    "22",
    "Véronique",
    "virginie.png",
    "38 ans",
    "Femme",
    "Homme",
    "Dordogne",
    "Hello ! je suis Virginie, professeure des écoles, j'ai horreur des fautes d'orthographe !!!"
)
const xavier = new humain(
    "23",
    "Xavier",
    "xavier.png",
    "44 ans",
    "Homme",
    "Femme",
    "Somme",
    "Bonjour. Je suis Xavier, un grand amoureux des reptiles."
)
const yves = new humain(
    "24",
    "Yves",
    "yves.png",
    "52 ans",
    "Homme",
    "Femme",
    "Alpes-Maritime",
    "Salut !  moi c'est Yves, toujours en bateau, j'adore naviguer."
)

function couleur() {
    if (this.gender == "Femme") {
        document.card2.style.backgroundColor = "#ffd9e2"
    }
} 



function goProfile(index){
    window.location.href = `profil.html?index=${index}`
}