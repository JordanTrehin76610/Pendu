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

const indicesPendu = [
    "Grimpe sans bruit, chasse sans fusil",
    "Fidèle sans serment",
    "Quatre murs et mille histoires",
    "Galope sans sabots",
    "Chute célèbre",
    "Membre immobile du repas",
    "Frontière à poignée",
    "Parle sans voix",
    "Couleur de l'alerte",
    "Visible dans l'absence",
    "Invisible mais brûlant",
    "Cache les couleurs",
    "Parure éphémère",
    "Silence glacé",
    "Vorace et dansant",
    "Immobile et feuillu",
    "Chute douce du ciel",
    "Soleil des dormeurs",
    "Deux, sauf surprise",
    "Cinq voix tactiles",
    "Frontière de l'odeur",
    "Racine mobile",
    "Écho sans réponse",
    "Claire mais insaisissable",
    "Invisible mais piquant",
    "Craque sous les dents",
    "Fermenté et fier",
    "Douce fin d'un végétal",
    "L'éveil du monde",
    "Force invisible",
    "Zébrée et sucrée, mais pique en prime",
    "Fardeau studieux au dos des petits",
    "Protège ce qui marche, vit par paire",
    "Chante sous les doigts mais ne respire pas",
    "Cadre lumineux sans paysage",
    "Voyage sans marcher",
    "Maison blindée sur pattes lentes",
    "Armé mais végétal",
    "Renvoie sans parler",
    "Habille sans couvrir les jambes",
    "Bavard à plumes, amateur d'eau",
    "Transparente et pleine d'idées",
    "Fier sur la colline, plein de tours et d'histoires",
    "Voile la vue, glisse dans l'air",
    "Trace sans parler, s'use en silence",
    "Muet dans son bocal, nage sans fin",
    "Croustille avant de fondre",
    "Blanc qui flotte et change de forme",
    "Ronde et dorée, fierté des crêpes",
    "Crinière au vent, sabot battant",
    "Petite et vive, parfois filaire",
    "Ferme sans clé mais s'ouvre au bon code",
    "Se vide en rythme, alimente la cadence",
    "Brille sans or, porté avec fierté",
    "Vue par l'œil mais sans contour net",
    "Citadin ailé, familier des miettes",
    "Cordes et bois pour chanter les doigts",
    "Travail assis, il te soutient",
    "Jamais seul, habille les deux jambes",
    "Verte ou composée, parfois vinaigrée",
    "Respire, bouge, mais n'est pas humain",
    "Abrite moteurs ou souvenirs",
    "Parfois d'amour, parfois administrative",
    "Parfumé ou désordonné, terrain vivant",
    "Sépare ou unit les yeux",
    "Barrière discrète, mais dissuasive",
    "Protège l'écoute ou amplifie le son",
    "Trouve le nord sans bouger",
    "Souffle géant des océans",
    "Éclaire mais ne chauffe pas",
    "Protection contre les larmes du ciel",
    "Monte sans jambes, descend sans bruit",
    "Invisible, pourtant partout",
    "Marche sans fin vers le haut",
    "Croqueurs de bêtes, nageurs en embuscade",
    "Cerveau de métal pour penser vite",
    "Regarde l'infiniment petit",
    "Fixe les étoiles lointaines",
    "Ballon de rêve en pleine ascension",
    "Questionne la sagesse des hommes",
    "Dessine les espaces habités",
    "Fleur d'automne aux mille pétales",
    "Figure à trois côtés, simple mais forte",
    "Musique de bois frappé",
    "Passage secret des données",
    "Serpent en spirale ou décoration",
    "Combinaison de plongée hors de l'eau",
    "Soigne les corps et les âmes",
    "Tisseur de secrets et de complots",
    "Étude de l'esprit humain",
    "Lois écrites pour l'ordre",
    "Mots lisibles à l'endroit et à l'envers",
    "Dinosaures aux petits bras, rois anciens",
    "Savoir en volumes infinis",
    "Dieux, héros et légendes antiques",
    "Normes strictes à respecter",
    "Comparaison sans ‘comme'",
    "Temple du savoir en papier",
    "Proposition non encore prouvée",
    "Art du secret codé",
    "Chevalier de la nuit, sans pouvoirs",
    "Araignée urbaine, jeune héros agile",
    "Homme d'acier venu d'ailleurs",
    "Guerrier aux cheveux d'or, maître du Ki",
    "Ninja au rêve de reconnaissance",
    "Sorcière brillante à lunettes",
    "Ami loyal et maladroit",
    "Mage noir au nez crochu",
    "Petit porteur de l'anneau",
    "Magicien gris et puissant",
    "Éclair électrique jaune",
    "Héros invincible à la tête chauve",
    "Dieu du tonnerre nordique",
    "Farceur trompeur des mythes",
    "Génie milliardaire dans une armure",
    "Armure high-tech et génie",
    "Force verte incontrôlable",
    "Princesse courageuse d'un royaume légendaire",
    "Jeune héros à la triforce",
    "Maître Jedi sage et petit",
    "Enfant sensible de la Force",
    "Titan fou, destructeur",
    "Prince du chaos et du crime",
    "Princesse rebelle de la galaxie",
    "Guerrière du réveil",
    "Mentor Jedi solitaire",
    "Nom complet d'un maître Jedi",
    "Seigneur Sith masqué",
    "Rebelle déjantée et dangereuse",
    "Sorcière aux pouvoirs chaotiques",
    "Amis new-yorkais inséparables",
    "Chimiste devenu roi de la drogue",
    "Adolescents affrontent l'inconnu",
    "Île mystérieuse sans retour facile",
    "Jeu mortel pour survivre",
    "Médecin alcoolique et sarcastique",
    "Prince des enfers en quête de rédemption",
    "Guerriers nordiques en quête de gloire",
    "Tueur en série au code moral complexe",
    "Héros masqué de la ville",
    "Vitesse extrême, éclairs et héroïsme",
    "Voleur charmeur et intelligent",
    "Bureau absurde et hilarant",
    "Reflets sombres de notre société",
    "Chasseurs de démons et monstres",
    "Lutte de pouvoir dans un royaume fictif",
    "Famille riche et intrigues sans fin",
    "Voyage dans le temps et secrets",
    "Docteur voyageur dans le temps",
    "Héros anti-héros en uniforme",
    "Plombier moustachu dans un royaume champignon",
    "Héroïne à la triforce légendaire",
    "Chasseuse de primes intergalactique",
    "Boule rose qui aspire tout",
    "Hérisson supersonique bleu",
    "Guerre futuriste interplanétaire",
    "Battle royale coloré et chaotique",
    "Bâtisseur cubique et aventurier",
    "Monde virtuel en création libre",
    "Traîtrise spatiale en équipe",
    "Course folle et chute garantie",
    "Démon et enfer à feu et sang",
    "Héros sombre contre les démons",
    "Conflit épique entre orcs et humains",
    "Équipe d'élite aux pouvoirs variés",
    "Tactique et précision au tir",
    "Dernier survivant dans l'arène",
    "Foot virtuel mondialement joué",
    "Basketball réaliste et compétitif",
    "Combat martial japonais emblématique",
    "Captureuse de créatures électriques",
    "Lame de lumière Jedi",
    "Fragment d'âme maudit",
    "Disque boomerang du justicier",
    "Cube dimensionnel puissant",
    "Marteau du dieu du tonnerre",
    "Épée légendaire du roi Arthur",
    "Carnet mortel des noms",
    "Planche volante futuriste",
    "Source d'énergie temporelle",
    "Anneau unique, tout-puissant",
    "Symbole du courage et de la sagesse",
    "Trésor d'un pirate insatiable",
    "Balle dorée à attraper",
    "Baguette de magie",
    "Entreprise futuriste et capsule",
    "Guide électronique des créatures",
    "Symbole d'un royaume ancien",
    "Gant chargé de pouvoirs infinis",
    "Soldat du mal en armure blanche",
    "Quatuor de Liverpool aux légendes éternelles",
    "Grunge culte des années 90",
    "Groupe sud-coréen à la vague mondiale",
    "Univers partagé de super-héros",
    "Rivaux iconiques du comics",
    "Studio d'animation à la lampe magique",
    "Roi de l'animation enchantée",
    "Plateforme de séries et films en streaming",
    "Créateur pixelisé d'expériences visuelles",
    "Maître de l'animation japonaise poétique",
    "Géant du jeu vidéo nippon",
    "Console emblématique Sony",
    "Console verte et noire de Microsoft",
    "Chaîne câblée aux séries marquantes",
    "Réseau social vidéo court",
    "Plateforme vidéo en direct et différé",
    "Site de streaming de jeux vidéo",
    "Figurines en vinyle collectors",
    "Briques modulables emblématiques",
    "Icône jouet et film pour enfants",
];


let random = Math.floor(Math.random() * motsPendu.length)
let fun = Math.floor(Math.random() * 100)
let motDevine = []
let motCacher = []
let indice = ''
let erreur = 0
let initialisation = 0





// Cache le mot pour le joueur
while (initialisation != 1) {


    ost.play()
    motDevine = motsPendu[random].toUpperCase().split('')
    indice = indicesPendu[random]

    for (let i = 0; i < motDevine.length; i++) {
        motCacher[i] = ' _ '
    }
    document.getElementById("motADevine").textContent = motCacher.join("")
    document.getElementById("indice").textContent = indice
    initialisation = 1
    console.log(`Vous avez le mot n°${random + 1} à deviner`)
    ost.play()

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
        victoire()
    } else if (erreur == 9) {
        gameOver()
    }

}


function victoire() {
    ost.pause()
    document.getElementById("motADevine").textContent = motDevine.join("")
    document.getElementById("abandon").style.display = "none"
    document.getElementById("rejouer").style.display = "inline"
    document.getElementById("confetti").style.display = "inline"
    win.play()
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
    ost.pause()

    if (fun == 9) {
        document.getElementById("gameOver").style.display = "none"
        document.getElementById("clavier1").style.display = "none"
        document.getElementById("clavier2").style.display = "none"
        document.getElementById("clavier3").style.display = "none"
        document.getElementById("abandon").style.display = "none"
        document.getElementById("rejouer").style.display = "none"
        document.getElementById("indicebtn").style.display = "none"
        document.getElementById("nuit").style.display = "none"
        document.getElementById("jour").style.display = "none"
        document.getElementById("motADevine").style.display = "none"
        document.getElementById("indice").style.display = "none"
        document.getElementById("body").style.color = "red"
        document.getElementById("body").style.backgroundColor = "red"
        document.getElementById("pendu").src = `assets/img/Confetti/secret.png`
        secret.play()
    } else {
        document.getElementById("pendu").src = `assets/img/pendu9.png`
        document.getElementById("gameOver").style.display = "inline"
        document.getElementById("clavier1").style.display = "none"
        document.getElementById("clavier2").style.display = "none"
        document.getElementById("clavier3").style.display = "none"
        document.getElementById("abandon").style.display = "none"
        document.getElementById("rejouer").style.display = "inline"
        document.getElementById("motADevine").textContent = motDevine.join("")
        loose.play()
    }

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

function prendIndice() {
    document.getElementById("indicebtn").style.display = "none"
    document.getElementById("indice").style.display = "inline"
}