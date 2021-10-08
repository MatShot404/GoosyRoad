const cases = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var textpos = 1;
var playerpos = 1;
var playercase = "case" + playerpos;
var lastcase = playerpos - 1;

var modal = document.getElementById("myModal");

//Gestion import XML
loadXMLDoc();
function loadXMLDoc() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            myFunction(this);
        }
    };
    xmlhttp.open("GET", "../data/questions.xml", true);
    xmlhttp.send();
}
function myFunction(xml) {
    var x, i, xmlDoc, txt;
    xmlDoc = xml.responseXML;
    txt = "";
    x = xmlDoc.getElementsByTagName("questionLabel"+playerpos);
    for (i = 0; i < x.length; i++) {
        txt += x[i].childNodes[0].nodeValue + "<br>";
    }
    document.getElementById("question").innerHTML = txt;
}

//Envoi de la réponse lorsque l'utilisateur submit sa réponse
document.getElementById('questionAnswer').addEventListener('submit', submitForm);

initialize();

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
    modal.style.display = "block";
    //openquestion();
}

//Affichage question/réponse
var reponse = ['ans1', 'ans4', 'ans2', 'ans1', 'ans3', 'ans2', 'ans4', 'ans1', 'ans1', 'ans4', 'ans3', 'ans2'];
var question = ['Quel est le mot de passe le plus sécurisé ?']
ReactDOM.render(
    <div>
        <h2 id="question">{question[playerpos - 1]}</h2>
    </div>,
    document.getElementById("question")
);

//Gestion réponse envoyée
function submitForm(e) {
    console.log(reponse);
    e.preventDefault();
    if (document.getElementById(reponse[playerpos - 1]).checked == true) {
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