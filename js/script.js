const cases = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var textpos = 1;
var playerpos = 1;
var playercase = "case" + playerpos;
var lastcase = playerpos - 1;

initialize();

function initialize() {
  cases.forEach((element) => {
    ReactDOM.render(
      <h1 className="casecontent"> {element} </h1>,
      document.getElementById("case" + textpos)
    );
    textpos += 1;
    ReactDOM.render(
      <img className="Oie" id="Oie" src="/img/OIE_1.png" alt="oie"></img>,
      document.getElementById("case1")
    );
  });
}


function butevent() {
    openquestion()
}

//Répond juste :
function playermovetrue() {
  ReactDOM.render(
    <img className="Oie" src="/img/OIE_1.png" alt="oie"></img>,
    document.getElementById("case" + playerpos)
  );
  lastcase += 1;
  console.log(lastcase);

  ReactDOM.render(
    <h1 className="casecontent"> DONE ! </h1>,
    document.getElementById("case" + lastcase)
  );
  document.getElementById("case" + lastcase).style.backgroundColor = "Green";
}

function playermovetransition() {
  document
    .getElementById("Oie")
    .appendChild(document.getElementsByClassName("case" + playerpos + 1));
}

// Répond faux :
function playermovefalse() {
  ReactDOM.render(
    <img className="Oie" src="/img/OIE_1.png" alt="oie"></img>,
    document.getElementById("case" + playerpos)
  );
  lastcase += 1;
  console.log(lastcase);

  ReactDOM.render(
    <h1 className="casecontent"> Wrong ! </h1>,
    document.getElementById("case" + lastcase)
  );
  document.getElementById("case" + lastcase).style.backgroundColor = "Red";
}

function settings() {
  alert("Options");
}

function reset() {
  location.reload();
}

function popUp() {}

function openquestion() {
  var answer = prompt("Answer this question");
  switch (answer) {
    case "1":
      alert("Good Job ! :)");
      playerpos += 1;
      playermovetrue();
      break;

    default:
      alert("Wrong");
      playerpos += 1;
      playermovefalse();
      break;
  }
}
