const motsPendu = [
    // Facile (1-30)
    "chat", "chien", "maison", "voiture", "pomme", "table", "porte", "livre", "rouge", "blanc",
    "soleil", "nuit", "fleur", "neige", "feu", "arbre", "pluie", "lune", "bras", "main",
    "nez", "pied", "mur", "eau", "sel", "pain", "fromage", "fruit", "jour", "vent",

    // Moyen (31-70)
    "abeille", "cartable", "chaussure", "clavier", "ecran", "valise", "tortue", "cactus", "miroir", "chemise",
    "canard", "bouteille", "chateau", "brouillard", "crayon", "poisson", "biscuit", "nuage", "galette", "cheval",
    "souris", "cadenas", "batterie", "bijou", "couleur", "pigeon", "guitare", "bureau", "pantalon", "salade",
    "animal", "garage", "lettre", "jardin", "lunette", "grillage", "casque", "boussole", "baleine", "lampe",

    // Difficile (71-100)
    "parapluie", "ascenseur", "camouflage", "escalier", "crocodile", "ordinateur", "microscope", "telescope", "montgolfiere", "philosophie",
    "architecture", "chrysantheme", "triangle", "xylophone", "transmission", "serpentin", "scaphandre", "infirmiere", "conspirateur", "psychologie",
    "legislation", "palindrome", "tyrannosaure", "encyclopedie", "mythologie", "reglementaire", "metaphore", "bibliotheque", "hypothese", "cryptographie",

    // Personnages et célébrités
    "batman", "spiderman", "superman", "goku", "naruto", "hermione", "ron", "voldemort", "frodo", "gandalf",
    "pikachu", "saitama", "thor", "loki", "tonystark", "ironman", "hulk", "zelda", "link", "yoda",
    "grogu", "thanos", "joker", "leia", "rey", "obiwan", "kenobi", "darthvader", "harleyquinn", "wanda",

    // Séries & films
    "friends", "breakingbad", "strangerthings", "lost", "squidgame", "house", "lucifer", "vikings", "dexter", "arrow",
    "flash", "lupin", "theoffice", "blackmirror", "supernatural", "gameofthrones", "succession", "dark", "drwho", "theboys",

    // Jeux vidéo
    "mario", "zelda", "metroid", "kirby", "sonic", "halo", "fortnite", "minecraft", "roblox", "amongus",
    "fallguys", "doom", "diablo", "warcraft", "overwatch", "valorant", "apex", "fifa", "nba2k", "tekken",

    // Univers & objets cultes
    "pokeball", "lightsaber", "horcrux", "batarang", "tesseract", "mjolnir", "excalibur", "deathnote", "hoverboard", "fluxcapacitor",
    "ring", "triforce", "onepiece", "snitch", "wand", "capsulecorp", "pokédex", "hylian", "infinitygauntlet", "stormtrooper",

    // Groupes, marques, noms liés à pop culture
    "beatles", "nirvana", "bts", "marvel", "dccomics", "pixar", "disney", "netflix", "pixl", "ghibli",
    "nintendo", "playstation", "xbox", "hbo", "tiktok", "youtube", "twitch", "funko", "lego", "barbie"
];
let random = Math.floor(Math.random() * motsPendu.length)
let motDevine = []
let motCacher = []
let erreur = 0
let initialisation = 0





// Cache le mot pour le joueur
while (initialisation != 1) {

    motDevine = motsPendu[random].toUpperCase().split('')

    for (let i = 0; i < motDevine.length; i++) {
        motCacher[i] = ' _ '
    }
    console.log(motDevine)
    document.getElementById("motADevine").textContent = motCacher.join("")
    initialisation = 1
}



//Le jeu
function tentative(lettre) {
    let trouve = false;

    //Cherche si la lettre est existante dans le mot pour renvoie true
    motDevine.forEach(function (char, index) {
        if (lettre == char) {
            motCacher[index] = char
            trouve = true
        }
    })
    document.getElementById("motADevine").textContent = motCacher.join("")


    //Reward ou punition par rapport au true
    if (trouve) {
        document.getElementById(lettre).style.backgroundColor = "gold"
    } else {
        erreur = erreur + 1;
        document.getElementById("pendu").src = `assets/img/pendu${erreur}.png`
        document.getElementById(lettre).style.backgroundColor = "gray"
    }

    //Condition de victoire ou de défaite
    const areEqual = motCacher.every((value, index) => value === motDevine[index]) //Verifie si les 2 tableaux sont identique (booléen)
    if (areEqual == 1) {
        console.log("win")
        victoire()
    } else if (erreur == 9) {
        gameOver()
    }

}


function victoire() {
    document.getElementById("motADevine").textContent = motDevine.join("")
    document.getElementById("abandon").style.display = "none"
    document.getElementById("rejouer").style.display = "inline"
    document.getElementById("confetti").style.display = "inline"
    for (let i = 0; i < 12500; i++) {
        let p = i % 25
        setTimeout(() => {
            document.getElementById("pendu").src = (i % 2 === 0) ? "assets/img/win1.png" : "assets/img/win2.png";
        }, i * 200)
        setTimeout(() => {
            document.getElementById("confetti").src = `assets/img/Confetti/5811153573a8496be24aec27f9ae16c5CsrgYiH554PN9B5c-${p}.png`
        }, i * 50)
        if (document.getElementById("rejouer").onclick == true) {
            rejouer()
        }
    }
}

function gameOver() {
    document.getElementById("pendu").src = `assets/img/pendu9.png`
    document.getElementById("gameOver").style.display = "inline"
    document.getElementById("clavier1").style.display = "none"
    document.getElementById("clavier2").style.display = "none"
    document.getElementById("clavier3").style.display = "none"
    document.getElementById("abandon").style.display = "none"
    document.getElementById("rejouer").style.display = "inline"
    document.getElementById("motADevine").textContent = motDevine.join("")
}

function rejouer() {
    window.location.reload()
}



function Nuit() {
    document.getElementById("body").style.color = "white"
    document.getElementById("body").style.backgroundColor = "black"
    document.querySelectorAll(".lettre").forEach(btn => {
        btn.style.color = "white"
        btn.style.backgroundColor = "black"
    })
}

function Jour() {
    document.getElementById("body").style.color = "black"
    document.getElementById("body").style.backgroundColor = "white"
    document.querySelectorAll(".lettre").forEach(btn => {
        btn.style.color = "black"
        btn.style.backgroundColor = "white"
    })
}
