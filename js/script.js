const cases = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var textpos = 1;
var playerpos = 1;
var playercase = "case" + playerpos;
var lastcase = playerpos - 1;
var questionModal = document.getElementById("questionModal");
var optionsModal = document.getElementById("optionsModal");
var lives = 2;

var listeQuestions = {
    "1question": "Quel est le mot de passe le plus sécurisé ?",
    "1reponse1": "zEg_1$=-Hn",
    "1reponse2": "123456789",
    "1reponse3": "Iwasbornin1992",
    "1reponse4": "azerty123",
    "1reponse": "ans1",

    "2question": "Un mot de passe pour être idéal doit contenir :",
    "2reponse1": "Une majuscule au début suivi par 4 lettres",
    "2reponse2": "Des chiffres un peu partout ",
    "2reponse3": "Des chiffres, des lettres et des caractères spéciaux",
    "2reponse4": "Uniquement des lettres",
    "2reponse": "ans3",

    "3question": "A quelle périodicité maximale acceptable devez-vous effectuer une sauvegarde de vos données pour être protégé ?",
    "3reponse1": "Quotidienne",
    "3reponse2": "Hebdomadaire",
    "3reponse3": "Mensuelle",
    "3reponse4": "Annuelle",
    "3reponse": "ans2",

    "4question": "Quels acronyme ci-dessous n'est pas en lien avec le WiFi ?",
    "4reponse1": "WPA",
    "4reponse2": "WEP",
    "4reponse3": "GTR",
    "4reponse4": "IEEE",
    "4reponse": "ans3",

    "5question": "Pour supprimer ses données personnelles qui peut-on contacter ?",
    "5reponse1": "La Commission Nationale de l'Informatique et des Libertés (CNIL)",
    "5reponse2": "La Commission Nationale de Protection à l'Image (CNPI)",
    "5reponse3": "La comission Européenne",
    "5reponse4": "Commission chargée de l'application de l'article 26 de la Constitution",
    "5reponse": "ans1",

    "6question": "Qui sont les chapeaux blancs (White Hat) ?",
    "6reponse1": "Un groupe de hacker russe ayant comme image de marque les chapeaux blancs",
    "6reponse2": "Un ensemble de membres d'une entreprise ayant pour but de protéger les utilisateurs d'un service",
    "6reponse3": "Des humoristes pas très marrants",
    "6reponse4": "Des hackers de bonne foie (étiques) embauchés par des entreprises ayant pour objectif de découvrir des failles en et les en prévenir",
    "6reponse": "ans4",

    "7question": "Est-ce conseiller d'utiliser plusieurs fois un même mot de passe ?",
    "7reponse1": "Oui",
    "7reponse2": "Non",
    "7reponse3": "",
    "7reponse4": "",
    "7reponse": "ans2",

    "8question": "A quoi servent les mises à jours de vos applications ?",
    "8reponse1": "A ajouter des bugs dans l'application",
    "8reponse2": "A réparé les failles de sécurité",
    "8reponse3": "A rien, le logiciel est déjà bien comme il est",
    "8reponse4": "A aller chez les concurrents",
    "8reponse": "ans2",

    "9question": "Avec quoi sécurisé l'accès à vos appareils si quelqu'un vous les volés ?",
    "9reponse1": "Un code à 4 chiffres",
    "9reponse2": "Un cadena (physique)",
    "9reponse3": "Une coque résistante",
    "9reponse4": "Un schéma",
    "9reponse": "ans4",

    "10question": "Pour veiller à la sécurité de votre machine et de vos données pour un téléchargement de logiciel il ne faut pas :",
    "10reponse1": "Téléchargez vos programmes sur les sites de leurs éditeurs",
    "10reponse2": "Décocher toutes les cases proposant d’installer des logiciels complémentaires",
    "10reponse3": "Cracker l'application pour l'avoir gratuitement si payante",
    "10reponse4": "Désactivez l’ouverture automatique des documents téléchargés et lancez une analyse antivirus",
    "10reponse": "ans3",

    "11question": "Dans les 4 propositions suivantes, laquelle est déconseillé pour vérifier si un mail est sécurisé ?",
    "11reponse1": "Ouvrir les pièces jointes et donc vérifier les documents envoyés",
    "11reponse2": "Vérifier l'identité de l'envoyeur (son nom, mail) ",
    "11reponse3": "Se renseigner sur internet par rapport au mail reçu",
    "11reponse4": "Inspecter le mail pour trouver de possible fautes d'orthographe",
    "11reponse": "ans1",

    "12question": "Dans les réponses suivantes, laquelle ne met pas en jeu les informations sensibles d'une entreprise ?",
    "12reponse1": "Brancher un support amovible personnel sur l'ordinateur",
    "12reponse2": "Enregistrer les informations professionnelle sur des équipements personnels",
    "12reponse3": "Envoyer des mails avec un compte utilisé à des fins personnel",
    "12reponse4": "Éteindre / verrouiller un ordinateur professionnel quand il n'est pas utilisé",
    "12reponse": "ans1",
}

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
    ReactDOM.render(
        <h2 id="question">{listeQuestions[playerpos + "question"]}</h2>, document.getElementById("question")
    );
    ReactDOM.render(
        <label htmlFor="ans1" id="ans1Label">{listeQuestions[playerpos + "reponse1"]}</label>, document.getElementById("ans1Label")
    );
    ReactDOM.render(
        <label htmlFor="ans2" id="ans2Label">{listeQuestions[playerpos + "reponse2"]}</label>, document.getElementById("ans2Label")
    );
    ReactDOM.render(
        <label htmlFor="ans3" id="ans3Label">{listeQuestions[playerpos + "reponse3"]}</label>, document.getElementById("ans3Label")
    );
    ReactDOM.render(
        <label htmlFor="ans4" id="ans4Label">{listeQuestions[playerpos + "reponse4"]}</label>, document.getElementById("ans4Label")
    )
    questionModal.style.display = "block";
    //openquestion();
}

//Gestion réponse envoyée
function submitForm(e) {
    e.preventDefault();

    if (playerpos == 12) {
        if (document.getElementById(listeQuestions[playerpos + "reponse"]).checked == true) {
            ReactDOM.render(
                <h1 className="casecontent"> DONE ! </h1>, document.getElementById("case" + playerpos));
            document.getElementById("case" + playerpos).style.backgroundColor = "Green";
            winModal.style.display = "block";
        } else {
            checkLives();
            ReactDOM.render(
                <h1 className="casecontent"> Wrong ! </h1>, document.getElementById("case" + playerpos));
            document.getElementById("case" + playerpos).style.backgroundColor = "Red";
            gameOverModal.style.display = "block"
        }
        questionModal.style.display = "none";
        
    }
    if (document.getElementById(listeQuestions[playerpos + "reponse"]).checked == true) {
        console.log("Bonne réponse :)");
        playerpos += 1;
        playermovetrue();
        questionModal.style.display = "none";
        checkLives();

    } else {
        console.log("Mauvaise réponse :(");
        playerpos += 1;
        playermovefalse();
        questionModal.style.display = "none";
        checkLives();
    }
}

//Réponse juste :
function playermovetrue() {
    ReactDOM.render(
        <img className="Oie" src="/img/OIE_1.png" alt="oie"></img>, document.getElementById("case" + playerpos));
    lastcase += 1;

    ReactDOM.render(
        <h1 className="casecontent"> DONE ! </h1>, document.getElementById("case" + lastcase));
    document.getElementById("case" + lastcase).style.backgroundColor = "Green";
}

// Réponse fausse :
function playermovefalse() {
    ReactDOM.render(
        <img className="Oie" src="/img/OIE_1.png" alt="oie" />, document.getElementById("case" + playerpos));
    lastcase += 1;
    lives -= 1;

    ReactDOM.render(
        <h1 className="casecontent"> Wrong ! </h1>, document.getElementById("case" + lastcase));
    document.getElementById("case" + lastcase).style.backgroundColor = "Red";
}

function checkLives() {
    if (lives == 2) {
        console.log("2 vies");
    } else if (lives == 1) {
        ReactDOM.render(
            <img className="lives" id="lives" src="..\img\feather2.png" alt="2 vies" />, document.getElementById("lives")
        );
        console.log("1 vie");
    } else if (lives == 0) {
        ReactDOM.render(
            <img className="lives" id="lives" src="..\img\feather1.png" alt="1 vie" />, document.getElementById("lives")
        );
        console.log("0 vie");
    } else if (lives < 0) {
        gameOver();
    }
}

function gameOver() {
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