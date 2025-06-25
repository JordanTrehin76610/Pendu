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
let random = Math.floor(Math.random() * 200)
let motDevine = []
let motCacher = []
let erreur = 0

motDevine = motsPendu[random].split('')
for (let i = 0; i < motDevine.length; i++) {
    motCacher[i] = ' _ '
}
console.log(motDevine)
document.getElementById("motADevine").textContent = motCacher

function tentative(lettre) {
    motDevine.forEach(function (lettre, index) {
        if (lettre == motDevine[index]) {
            motCacher[index] = motDevine[index]
        } else {
            erreur = erreur + 1
            document.getElementById("pendu").src = `assets/img/pendu${erreur}.png`
        }
    })
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
