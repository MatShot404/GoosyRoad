const cases = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var textpos = 1;
var playerpos = 1;
var playercase = "case" + playerpos;
var lastcase = playerpos - 1;
var lives = 2;

var listeQuestions = [
    {
        "question": "Quel est le mot de passe le plus sécurisé ?",
        "reponse1": "zEg_1$=-Hn",
        "reponse2": "123456789",
        "reponse3": "Iwasbornin1992",
        "reponse4": "azerty123",
        "reponse": "ans1"
    },
    {
        "question": "Un mot de passe, pour être idéal doit contenir :",
        "reponse1": "Une majuscule au début, suivi par 4 lettres",
        "reponse2": "Des chiffres un peu partout ",
        "reponse3": "Des chiffres, des lettres et des caractères spéciaux",
        "reponse4": "Uniquement des lettres",
        "reponse": "ans3"
    },
    {
        "question": "A quelle périodicité maximale acceptable devez-vous effectuer une sauvegarde de vos données pour être protégé ?",
        "reponse1": "Quotidienne",
        "reponse2": "Hebdomadaire",
        "reponse3": "Mensuelle",
        "reponse4": "Annuelle",
        "reponse": "ans2"
    },

    {
        "question": "Quel acronyme ci-dessous n'est pas en lien avec le Wi-Fi ?",
        "reponse1": "WPA",
        "reponse2": "WEP",
        "reponse3": "IFI",
        "reponse4": "IEEE",
        "reponse": "ans3"
    },
    {
        "question": "Pour supprimer ses données personnelles qui peut-on contacter ?",
        "reponse1": "La Commission Nationale de l'Informatique et des Libertés (CNIL)",
        "reponse2": "La Commission Nationale de Protection à l'Image (CNPI)",
        "reponse3": "La comission Européenne",
        "reponse4": "La Commission chargée de l'application de l'article 26 de la Constitution",
        "reponse": "ans1"
    },
    {
        "question": "Qui sont les chapeaux blancs (White Hat) ?",
        "reponse1": "Un groupe de hacker russe ayant comme image de marque les chapeaux blancs",
        "reponse2": "Un ensemble de membres d'une entreprise ayant pour but de protéger les utilisateurs d'un service",
        "reponse3": "Une association loi 1901 non lucrative de cybersécurité",
        "reponse4": "Des hackers de bonne foie (étiques) embauchés par des entreprises, ayant pour objectif de découvrir des failles et les en prévenir",
        "reponse": "ans4"
    },
    {
        "question": "Est-ce conseiller d'utiliser plusieurs fois un même mot de passe ?",
        "reponse1": "Oui",
        "reponse2": "Non",
        "reponse3": "",
        "reponse4": "",
        "reponse": "ans2"
    },

    {
        "question": "A quoi servent les mises à jours de vos applications ?",
        "reponse1": "A rajouter des bugs dans l'application",
        "reponse2": "A réparé les potentielles failles de sécurité",
        "reponse3": "A rien, le logiciel est déjà bien comme il est",
        "reponse4": "A améliorer les performances globales de votre machine",
        "reponse": "ans2"
    },

    {
        "question": "Quel est le meilleur moyen d'authentification à un appareil mobile ?",
        "reponse1": "Un code à 4 chiffres",
        "reponse2": "Un cadena (physique)",
        "reponse3": "Une coque en acier inoxydable",
        "reponse4": "Un schéma",
        "reponse": "ans4"
    },
    {
        "question": "Pour veiller à la sécurité de votre machine et de vos données pour un téléchargement de logiciel, il ne faut pas :",
        "reponse1": "Téléchargez vos programmes sur les sites de leurs éditeurs officiels",
        "reponse2": "Décocher toutes les cases proposant d’installer des logiciels complémentaires",
        "reponse3": "Cracker l'application pour l'avoir gratuitement si payante",
        "reponse4": "Désactivez l’ouverture automatique des documents téléchargés et lancez une analyse antivirus",
        "reponse": "ans3"
    },
    {
        "question": "Dans les 4 propositions suivantes, laquelle est déconseillé pour vérifier si un mail est sécurisé ?",
        "reponse1": "Ouvrir les pièces jointes et donc vérifier les documents envoyés",
        "reponse2": "Vérifier l'identité de l'expéditeur (son nom, adresse mail,...) ",
        "reponse3": "Se renseigner sur internet par rapport au mail reçu",
        "reponse4": "Inspecter le mail pour trouver de possible fautes d'orthographe",
        "reponse": "ans1"
    },
    {
        "question": "Dans les réponses suivantes, laquelle ne met pas en jeu les informations sensibles d'une entreprise ?",
        "reponse1": "Brancher un support amovible personnel sur l'ordinateur",
        "reponse2": "Enregistrer les informations professionnelle sur des équipements personnels",
        "reponse3": "Envoyer des mails avec un compte utilisé à des fins personnel",
        "reponse4": "Éteindre / verrouiller un ordinateur professionnel quand il n'est pas utilisé",
        "reponse": "ans4"
    }
]

//var listeQuestions = require('../data/listeQuestions.json');

//Initialise le jeu 
initialize();

//Envoi de la réponse lorsque l'utilisateur submit sa réponse
document.getElementById('questionAnswer').addEventListener('submit', submitForm);

//Initialisation du jeu
function initialize() {
    //Chaque case affiche son numéro
    cases.forEach((element) => {
        ReactDOM.render(<h1 className="casecontent"> {element} </h1>, document.getElementById("case" + textpos));
        textpos += 1;
    });
    //Affichage de l'oie
    ReactDOM.render(
        <img id="oie" className="Oie" src="/img/OIE_1.png" alt="oie"></img>, document.getElementById("case1")
    );
}

//Ouverture de la modal de question avec contenu en fonction de la position du joueur
function butevent() {
    playSound(play);
    ReactDOM.render(
        <h2 id="question">{listeQuestions[playerpos - 1].question}</h2>, document.getElementById("question")
    );
    ReactDOM.render(
        <label htmlFor="ans1" id="ans1Label">{listeQuestions[playerpos - 1].reponse1}</label>, document.getElementById("ans1Label")
    );
    ReactDOM.render(
        <label htmlFor="ans2" id="ans2Label">{listeQuestions[playerpos - 1].reponse2}</label>, document.getElementById("ans2Label")
    );
    ReactDOM.render(
        <label htmlFor="ans3" id="ans3Label">{listeQuestions[playerpos - 1].reponse3}</label>, document.getElementById("ans3Label")
    );
    ReactDOM.render(
        <label htmlFor="ans4" id="ans4Label">{listeQuestions[playerpos - 1].reponse4}</label>, document.getElementById("ans4Label")
    )
    questionModal.style.display = "block";
}

//Gestion des réponses envoyées
function submitForm(e) {
    e.preventDefault();

    //Si le joueur est à la fin du plateau de jeu
    if (playerpos == 12) {
        if (document.getElementById(listeQuestions[playerpos - 1].reponse).checked == true) {
            document.getElementById("case" + playerpos).style.backgroundColor = "rgba(0, 128, 0, 0.6)";
            youWin();
        } else {
            lives -= 1;
            checkLives();
            document.getElementById("case" + playerpos).style.backgroundColor = "rgba(128, 0, 0, 0.6)";
            if (lives > 0) {
                youWin();
            }
        }
        questionModal.style.display = "none";
    } else {
        if (document.getElementById(listeQuestions[playerpos - 1].reponse).checked == true) {
            //Bonne réponse
            //console.log("Bonne réponse :)");
            playerpos += 1;
            playermovetrue();
        } else {
            // Mauvaise réponse
            //console.log("Mauvaise réponse :(");
            playerpos += 1;
            playermovefalse();
        }
    }
    //Vérification de la réponse du joueur
}

//Réponse juste :
function playermovetrue() {
    playSound(goodA);
    questionModal.style.display = "none";
    ReactDOM.render(
        <img className="Oie" src="/img/OIE_1.png" alt="oie"></img>, document.getElementById("case" + playerpos));
    lastcase += 1;

    ReactDOM.render(
        <svg class="w-6 h-6 casecontent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>, document.getElementById("case" + lastcase));
    document.getElementById("case" + lastcase).style.backgroundColor = "rgba(0, 128, 0, 0.6)";
}

// Réponse fausse :
function playermovefalse() {
    playSound(badA);
    questionModal.style.display = "none";
    ReactDOM.render(
        <img className="Oie" src="/img/OIE_1.png" alt="oie" />, document.getElementById("case" + playerpos));
    lastcase += 1;
    lives -= 1;
    checkLives();

    ReactDOM.render(
        <svg class="w-6 h-6 casecontent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>, document.getElementById("case" + lastcase));
    document.getElementById("case" + lastcase).style.backgroundColor = "rgba(128, 0, 0, 0.6)";
}

function checkLives() {
    if (lives == 2) {
        console.log("2 vies");
    } else if (lives == 1) {
        ReactDOM.render(
            <div>
                <h1 className="livesLabel">Vies :</h1>
                <img className="lives" id="lives" src="..\img\feather2.png" alt="2 vies" />
            </div>
            , document.getElementById("lives")
        );
        console.log("1 vie");
    } else if (lives == 0) {
        ReactDOM.render(
            <div>
                <h1 className="livesLabel" >Vies :</h1>
                <img className="lives" id="lives" src="..\img\feather1.png" alt="1 vie" />
            </div>
            , document.getElementById("lives")
        );
        console.log("0 vie");
    } else if (lives < 0) {
        ReactDOM.render(
            <div></div>, document.getElementById("lives")
        );
        gameOver();
    }
}

function youWin() {
    playSound(win);
    winModal.style.display = "block";
}

function gameOver() {
    playSound(lose);
    gameOverModal.style.display = "block";
}

function playermovetransition() {
    // Move
}

//@TODO
function settings() {
    optionsModal.style.display = "block";
}

// function popUp() { }

function reset() {
    location.reload();
}


// function openquestion() {
//     var answer = prompt("Answer this question");
//     switch (answer) {
//         case "1":
//             alert("Good Job ! :)");
//             playerpos += 1;
//             playermovetrue();
//             break;

//         default:
//             alert("Wrong");
//             playerpos += 1;
//             playermovefalse();
//             break;
//     }
//     console.log(playerpos);
// }


// Modal :

window.onclick = function (event) {
    if (event.target == questionModal) {
        questionModal.style.display = "none";
    } else if (event.target == optionsModal) {
        optionsModal.style.display = "none";
    }
}

// Sounds

var play = document.getElementById("play");
var lose = document.getElementById("lose");
var win = document.getElementById("win");
var good = document.getElementById("goodA");
var bad = document.getElementById("badA");



function playSound(sound) {
    checkMute(sound);
    sound.play();
}

function checkMute(sound) {
    if ($('input[name=mute]').is(':checked')) {
        sound.muted = true;
    } else {
        sound.muted = false;
    }
}