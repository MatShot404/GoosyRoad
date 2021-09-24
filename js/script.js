const cases = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
var textpos = 1
var playerpos = 1
var playercase = "case" + playerpos
var lastcase = playerpos - 1

initialize();

function initialize() {
    cases.forEach(element => {
        ReactDOM.render(<h1 className="casecontent"> {element} </h1>, document.getElementById("case" + textpos));
        textpos += 1
        ReactDOM.render(<img className="imgOie" src="/img/OIE_1.png" alt="oie" ></img>, document.getElementById("case1"));
    });
}

// const case1 = <h1 class="casecontent"> 1 </h1>
// var randomQ = new XMLHttpRequest();
// randomQ = randomQ.open('GET', '../questions/q1.txt');

// ReactDOM.render(randomQ, document.getElementById('case1'));
function butevent() {
    playerpos += 1
    playermove()
}


function playermove() {
    ReactDOM.render(<img className="imgOie" src="/img/OIE_1.png" alt="oie" ></img>, document.getElementById("case" + playerpos));
    lastcase += 1
    console.log(lastcase);
    ReactDOM.render(<h1 className="casecontent"> DONE ! </h1>, document.getElementById('case' + lastcase))
    document.getElementById('case' + lastcase).style.backgroundColor = "Green";
}

function playermovetrans() {

}

function reset() {
    location.reload();
}

function popUp() {

}

function openquestion() {
    answer = prompt("Answer this question douchebag");
    switch (answer) {
        case 1:
            alert("Good Job ! :)")
            break;

        default:
            alert("Wrong")
            break;
    }
}