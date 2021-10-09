const cases = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var textpos = 1;
var playerpos = 1;
var playercase = "case" + playerpos;
var lastcase = playerpos - 1;
var numquestion = "question" + playerpos;

var modal = document.getElementById("myModal");

var listeQuestions = {
    "1question": "Quel est le mot de passe le plus sécurisé ?",
    "1reponse1": "zEg _1$= - Hn",
    "1reponse2": "123456789",
    "1reponse3": "Iambornin1992",
    "1reponse4": "azerty123",
    "1reponse": "ans1",

    "2question": "Un mot de passe pour être idéal doit contenir :",
    "2reponse1": "Une majuscule au début suivi par 4 lettres",
    "2reponse2": "Des chiffres un peu partout ",
    "2reponse3": "Des chiffres, des lettres et des caractères spéciaux",
    "2reponse4": "Uniquement des lettres",
    "2reponse": "ans3",

    "3question": "Quels sont les deux périodicité acceptable auxquelles vous devez effectué une sauvegarde de vos données pour être protégé ?",
    "3reponse1": "Quotidienne",
    "3reponse2": "Hebdomadaire",
    "3reponse3": "Mensuelle",
    "3reponse4": "Annuelle",
    "3reponse": "ans2",
}


//Gestion import XML
// loadXMLDoc();
// function loadXMLDoc() {
//     var xmlhttp = new XMLHttpRequest();
//     xmlhttp.onreadystatechange = function () {
//         if (this.readyState == 4 && this.status == 200) {
//             myFunction(this);
//         }
//     };
//     xmlhttp.open("GET", "../data/questions.xml", true);
//     xmlhttp.send();
// }
// function myFunction(xml) {
//     var x, i, xmlDoc, txt;
//     xmlDoc = xml.responseXML;
//     txt = "";
//     x = xmlDoc.getElementsByTagName("questionLabel" + playerpos);
//     for (i = 0; i < x.length; i++) {
//         txt += x[i].childNodes[0].nodeValue + "<br>";
//     }
//     document.getElementById("question").innerHTML = txt;
// }

//Initialise et Envoi de la réponse lorsque l'utilisateur submit sa réponse
initialize();
document.getElementById('questionAnswer').addEventListener('submit', submitForm);

//Initialisation du jeu
function initialize() {
    //Chaque case affiche son numéro
    cases.forEach((element) => {
        ReactDOM.render(
            <h1 className="casecontent"> {element} </h1>,
            document.getElementById("case" + textpos)
        );
        textpos += 1;
    });
    //Affichage de l'oie
    ReactDOM.render(
        <img id="oie" className="Oie" src="/img/OIE_1.png" alt="oie"></img>, document.getElementById("case1"));
}

//Ouverture de la modal de question 
function butevent() {
    switch (playerpos) {
        case 1:
            ReactDOM.render(
                <h2 id="question">{listeQuestions["1question"]}</h2>, document.getElementById("question")
            );
            ReactDOM.render(
                <label htmlFor="ans1" id="ans1Label">{listeQuestions["1reponse1"]}</label>, document.getElementById("ans1Label")
            );
            ReactDOM.render(
                <label htmlFor="ans2" id="ans2Label">{listeQuestions["1reponse2"]}</label>, document.getElementById("ans2Label")
            );
            ReactDOM.render(
                <label htmlFor="ans3" id="ans3Label">{listeQuestions["1reponse3"]}</label>, document.getElementById("ans3Label")
            );
            ReactDOM.render(
                <label htmlFor="ans4" id="ans4Label">{listeQuestions["1reponse4"]}</label>, document.getElementById("ans4Label")
            )
            break;
        case 2:
            ReactDOM.render(
                <h2 id="question">{listeQuestions["2question"]}</h2>, document.getElementById("question")
            );
            ReactDOM.render(
                <label htmlFor="ans1" id="ans1Label">{listeQuestions["2reponse1"]}</label>, document.getElementById("ans1Label")
            );
            ReactDOM.render(
                <label htmlFor="ans2" id="ans2Label">{listeQuestions["2reponse2"]}</label>, document.getElementById("ans2Label")
            );
            ReactDOM.render(
                <label htmlFor="ans3" id="ans3Label">{listeQuestions["2reponse3"]}</label>, document.getElementById("ans3Label")
            );
            ReactDOM.render(
                <label htmlFor="ans4" id="ans4Label">{listeQuestions["2reponse4"]}</label>, document.getElementById("ans4Label")
            );
            break;
        case 3:
            ReactDOM.render(
                <h2 id="question">{listeQuestions["3question"]}</h2>, document.getElementById("question")
            );
            ReactDOM.render(
                <label htmlFor="ans1" id="ans1Label">{listeQuestions["3reponse1"]}</label>, document.getElementById("ans1Label")
            );
            ReactDOM.render(
                <label htmlFor="ans2" id="ans2Label">{listeQuestions["3reponse2"]}</label>, document.getElementById("ans2Label")
            );
            ReactDOM.render(
                <label htmlFor="ans3" id="ans3Label">{listeQuestions["3reponse3"]}</label>, document.getElementById("ans3Label")
            );
            ReactDOM.render(
                <label htmlFor="ans4" id="ans4Label">{listeQuestions["3reponse4"]}</label>, document.getElementById("ans4Label")
            );
            break;
        default:
            break;
    }
    modal.style.display = "block";
    //openquestion();
}

//Affichage question/réponse
var reponse = ['ans1', 'ans4', 'ans2', 'ans1', 'ans3', 'ans2', 'ans4', 'ans1', 'ans1', 'ans4', 'ans3', 'ans2'];
var question = ['Quel est le mot de passe le plus sécurisé ?']
// ReactDOM.render(
//     <div>
//         <h2 id="question">{question[playerpos - 1]}</h2>
//     </div>,
//     document.getElementById("question")
// );

//Gestion réponse envoyée
function submitForm(e) {
    console.log(reponse);
    e.preventDefault();
    if (document.getElementById(reponse).checked == true) {
        console.log("Bonne réponse :)");
        playerpos += 1;
        playermovetrue();
        modal.style.display = "none";

    } else {
        console.log("Mauvaise réponse :(");
        playerpos += 1;
        playermovefalse();
        modal.style.display = "none";
    }
}

//Répond juste :
function playermovetrue() {
    ReactDOM.render(
        <img className="Oie" src="/img/OIE_1.png" alt="oie"></img>,
        document.getElementById("case" + playerpos)
    );
    lastcase += 1;

    ReactDOM.render(
        <h1 className="casecontent"> DONE ! </h1>,
        document.getElementById("case" + lastcase)
    );
    document.getElementById("case" + lastcase).style.backgroundColor = "Green";
}

// Répond faux :
function playermovefalse() {
    ReactDOM.render(
        <img className="Oie" src="/img/OIE_1.png" alt="oie"></img>, document.getElementById("case" + playerpos));
    lastcase += 1;

    ReactDOM.render(
        <h1 className="casecontent"> Wrong ! </h1>, document.getElementById("case" + lastcase));
    document.getElementById("case" + lastcase).style.backgroundColor = "Red";
}

function playermovetransition() {
    // Move
}



//@TODO
function settings() {
    alert("Options");
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
    if (event.target == modal) {
        modal.style.display = "none";
    }
}