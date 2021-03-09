function QuizCard() {
    return `
    <div id="quizcard" style="
    border-radius: 25px;
    background: #D9FEE3;
    width: 58vw;
    height: 100vw;  
    margin:66px;
    font-family: 'Actor', sans-serif;
    font-size: 30px;
    color: #FFFFFF;
    text-shadow: 2px 2px 2px  #FFCDF4,
    2px 2px 0 #FFCDF4,
    2px 2px 0 #FFCDF4,
    2px 2px 0 #FFCDF4;
    text-align:center;
    position:absolute;
    top: 30px;
    display:flex;
    z-index:-4;" <div>test your knowledge 
    <div id="quiz"> 1. is adopting a cat all around cheaper comapared to a petstore?
    2. All cats from the shelter are sick</div>
    <button style="  background-color: #EEE5FF;
    border: 7px solid #FFFFFF;
    border-radius: 12px;
    width: 120px;
    padding: 15px 32px;
    text-align: center;
    display: flex;
    font-size: 22px;
    margin: 4px 2px;
    cursor: pointer;
    font-family: 'Actor', sans-serif;
    position: absolute;
  left: 450px;
  top: 50vw;
  z-index: 1;"
    onclick="truee()">true</button>
    <button style="  
    background-color: #EEE5FF;
    border: 7px solid #FFFFFF;
    border-radius: 12px;
    width: 120px;
    padding: 15px 32px;
    text-align: center;
    display: flex;
    font-size: 22px;
    margin: 4px 2px;
    cursor: pointer;
    font-family: 'Actor', sans-serif;
    position: absolute;
  left: 100px;
  top: 50vw;
  z-index: 1;"
    onclick="falsee()">false</button>
    </div>
    <div id="quiz1"></div>
    <button style="  background-color: #EEE5FF;
    border: 7px solid #FFFFFF;
    border-radius: 12px;
    width: 120px;
    padding: 15px 32px;
    text-align: center;
    display: flex;
    font-size: 22px;
    margin: 4px 2px;
    cursor: pointer;
    font-family: 'Actor', sans-serif;
    position: absolute;
  left: 520px;
  top: 50vw;
  z-index: 1;""
    onclick="yes()">no</button>
    <button style="  background-color: #EEE5FF;
    border: 7px solid #FFFFFF;
    border-radius: 12px;
    width: 120px;
    padding: 15px 32px;
    text-align: center;
    display: flex;
    font-size: 22px;
    margin: 4px 2px;
    cursor: pointer;
    font-family: 'Actor', sans-serif;
    position: absolute;
  left: 170px;
  top: 50vw;
  z-index: 1;""
    onclick="no()">yes</button>
    </div>
    

    </div> `;
}

function truee(){
    document.getElementById('quiz').innerHTML="That is not correct";
    document.getElementById('quiz').style.color="green";
}

function falsee(){
    document.getElementById('quiz').innerHTML="That is correct";
    document.getElementById('quiz').style.color="green";
}


function yes(){
    document.getElementById('quiz1').innerHTML="That is incorrect";
    document.getElementById('quiz').style.color="green";
}

function no(){
    document.getElementById('quiz1').innerHTML="That is correct";
    document.getElementById('quiz').style.color="green";
}