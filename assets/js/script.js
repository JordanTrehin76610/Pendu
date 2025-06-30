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
    "nintendo", "playstation", "xbox", "hbo", "tiktok", "youtube", "twitch", "funko", "lego", "barbie",
    "kratos", "ariel", "freddy", "shrek", "midoriya", "sauron", "doomguy", "geralt", "arthur", "luffy",
    "kass", "sakura", "bilbo", "samus", "raphael", "buzz", "scar", "ciri", "sheik", "aloy",
    "cloud", "negan", "katara", "zuko", "blanka", "jinx", "cortana", "mewtwo", "glados", "banjo",
    "kazooie", "spyro", "crash", "ratchet", "clank", "ellie", "joel", "abby", "arthas", "sylvanas",
    "ganon", "tidus", "yuna", "lara", "mario", "peach", "bowser", "snake", "ryu", "ken",
    "inception", "matrix", "gladiator", "interstellar", "dune", "avatar", "tenet", "titanic", "scarface", "rocky",
    "naruto", "bleach", "onepiece", "dragonball", "jojo", "chainsawman", "deathnote", "demon", "attack", "spyxfamily",
    "friends", "lost", "dexter", "lucifer", "dark", "vikings", "house", "suits", "hannibal", "ozark",
    "eldenring", "minecraft", "terraria", "fortnite", "overwatch", "bioshock", "portal", "diablo", "halo", "doom",
    "akira", "ghost", "paprika", "ninja", "trigun", "ergo", "steins", "tokyo", "monster", "pluto", "chaise", "fenetre", "fourchette", "assiette", "lampe", "telephone", "clavier", "sac", "montre", "chaussure",
    "chemise", "pantalon", "rideau", "ordinateur", "stylo", "livre", "voiture", "bouteille", "cle", "portefeuille",
    "valise", "verre", "table", "tasse", "canape", "manteau", "chapeau", "oreiller", "coussin", "frigo",
    "miroir", "serviette", "balai", "poubelle", "plafond", "sol", "mur", "porte", "tiroir", "lunettes",
    "camion", "avion", "bus", "velo", "feu", "eponge", "savon", "brosse", "rideau", "poele"
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
    "Comparaison sans 'comme'",
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
    "Dieu de la guerre dans un célèbre jeu vidéo",
    "Princesse sirène de Disney",
    "Tueur aux griffes dans un cauchemar",
    "Ogre vert au grand cœur",
    "Héros de My Hero Academia",
    "Seigneur des ténèbres dans Le Seigneur des Anneaux",
    "Héros du jeu de tir contre les démons",
    "Sorcier chasseur de monstres",
    "Roi à la quête du Graal",
    "Capitaine au chapeau de paille",
    "Musicien oiseau dans Zelda: Breath of the Wild",
    "Amie et ninja dans Naruto",
    "Hobbit aventureux et oncle de Frodo",
    "Chasseuse de primes en armure dans Metroid",
    "Tortue ninja au bandeau rouge",
    "Ranger de l'espace avec des ailes",
    "Méchant lion dans Le Roi Lion",
    "Princesse surpuissante dans The Witcher",
    "Alias mystérieux de Zelda",
    "Héroïne de Horizon Zero Dawn",
    "Héros blond de Final Fantasy VII",
    "Chef impitoyable dans The Walking Dead",
    "Maître de l'eau dans Avatar",
    "Prince exilé maîtrisant le feu",
    "Guerrier électrique dans Street Fighter",
    "Tireuse déjantée dans League of Legends",
    "IA bleue dans Halo",
    "Clone légendaire de Pokémon",
    "IA cynique dans Portal",
    "Ours musicien dans un jeu Nintendo 64",
    "Oiseau bavard sur son dos",
    "Petit dragon violet qui vole",
    "Bandicoot surexcité de PlayStation",
    "Lombax aventurier de l'espace",
    "Robot acolyte de Ratchet",
    "Héroïne post-apo dans The Last of Us",
    "Père protecteur dans The Last of Us",
    "Antagoniste musclée dans The Last of Us II",
    "Paladin corrompu de Warcraft",
    "Reine banshee elfe dans Warcraft",
    "Grand méchant de Zelda",
    "Héros de Final Fantasy X",
    "Invocationeuse de Final Fantasy X",
    "Aventurière célèbre de Tomb Raider",
    "Plombier moustachu de Nintendo",
    "Princesse emblématique de Nintendo",
    "Tortue géante ennemie de Mario",
    "Soldat furtif dans Metal Gear",
    "Maître du combat dans Street Fighter",
    "Rival de Ryu dans Street Fighter",
    "Film de Nolan avec des rêves imbriqués",
    "Film cyberpunk avec Neo",
    "Film historique avec Russell Crowe",
    "Film spatial philosophique de Nolan",
    "Film de science-fiction tiré d'un roman de Frank Herbert",
    "Film de James Cameron sur une planète lointaine",
    "Film complexe avec le temps inversé",
    "Film romantique sur un naufrage",
    "Film culte avec Al Pacino, trafic de drogue",
    "Saga de boxe avec Sylvester Stallone",
    "Manga avec un ninja en quête de reconnaissance",
    "Manga avec des shinigamis et des zanpakuto",
    "Manga de pirates à la recherche d'un trésor",
    "Manga culte avec des boules de cristal",
    "Manga avec des poses stylisées et des Stand",
    "Manga sanglant avec une tronçonneuse",
    "Manga où un cahier tue",
    "Manga avec des pourfendeurs de demons",
    "Manga où des titans attaquent l'humanité",
    "Comédie familiale avec espion, télépathe et assassin",
    "Série culte avec six amis à New York",
    "Série mystérieuse sur une île",
    "Tueur en série expert en sang",
    "Le diable en thérapie à Los Angeles",
    "Série allemande sur le voyage dans le temps",
    "Série sur des guerriers nordiques",
    "Série médicale avec un docteur grincheux",
    "Série d'avocats à New York",
    "Psychiatre et cannibale célèbre",
    "Cartel, argent et complications familiales",
    "Jeu difficile avec un monde ouvert fantastique",
    "Jeu de construction en blocs",
    "Jeu bac à sable en 2D",
    "Battle royale coloré très populaire",
    "FPS avec des héros variés",
    "FPS sous-marin au style rétrofuturiste",
    "Puzzle-game avec une IA cynique",
    "Jeu sombre avec des démons",
    "FPS dans l'espace avec Master Chief",
    "Jeu de tir contre les enfers",
    "Film d'animation culte de Katsuhiro Otomo",
    "Film de SF avec des cyborgs invisibles",
    "Film d'animation onirique japonais",
    "Série de ninjas adolescents",
    "Western futuriste animé",
    "Série SF complexe sur l'identité",
    "Anime de science et de destin",
    "Anime de goules à Tokyo",
    "Thriller manga psychologique",
    "Manga de robots et enquête futuriste",
      "On s'assoit dessus",
  "Elle laisse passer la lumiere",
  "Pour manger avec un couteau",
  "Elle accueille vos aliments au repas",
  "Objet qui éclaire",
  "Pour appeler ou envoyer un message",
  "Pour taper sur un ordinateur",
  "Objet pour transporter vos affaires",
  "Elle donne l'heure au poignet",
  "On les met aux pieds",
  "Vêtement à manches pour le haut du corps",
  "Vêtement pour les jambes",
  "Habille les fenêtres",
  "Machine pour travailler ou naviguer sur internet",
  "Objet pour écrire",
  "Contient des histoires ou des connaissances",
  "Moyen de transport personnel à moteur",
  "Pour contenir de l'eau ou une boisson",
  "Elle ouvre les serrures",
  "Contient vos papiers et argent",
  "Contient vos affaires en voyage",
  "Pour boire, souvent en verre ou plastique",
  "Meuble pour poser des objets",
  "Pour boire du café ou du thé",
  "Meuble pour s'allonger ou s'asseoir confortablement",
  "Vêtement chaud d'extérieur",
  "Accessoire pour la tête",
  "Objet moelleux pour la tête dans un lit",
  "Petit coussin décoratif ou de confort",
  "Appareil pour garder les aliments au frais",
  "Objet réfléchissant votre image",
  "Pour se sécher",
  "Pour balayer le sol",
  "Réceptacle à déchets",
  "Partie haute d'une pièce",
  "Surface sur laquelle on marche",
  "Surface verticale d'une pièce",
  "Elle s'ouvre et se ferme pour entrer ou sortir",
  "Contient des objets dans un meuble",
  "Accessoire pour mieux voir",
  "Gros véhicule de transport",
  "Véhicule volant",
  "Transport en commun terrestre",
  "Deux roues sans moteur",
  "Émet de la lumière rouge, orange, verte",
  "Pour nettoyer les surfaces",
  "Produit pour se laver",
  "Pour se brosser les dents ou les cheveux",
  "Cache la lumière ou la vue",
  "Pour cuire des aliments sur le feu"
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
    let trouve = false

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