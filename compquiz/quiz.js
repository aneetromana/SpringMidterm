
function Quiz() {
    return `
    <div id="quiz" style="
        font-family: 'Actor', sans-serif;
        font-size: 60px;
        position:absolute;
        z-index:4;"
        onclick="Truee()"></button>
     </div> `;
}

function truee(){
    document.getElementById('quiz').innerHTML="That is correct";
    document.getElementById('quiz').style.color="green";
}

function falsee(){
    document.getElementById('quiz').innerHTML="That is not correct";
}

