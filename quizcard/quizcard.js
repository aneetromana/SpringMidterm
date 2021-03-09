function QuizCard() {
    return `
    <div id="quizcard" style="
    border-radius: 25px;
    background: #D9FEE3;
    width: 60vw;
    height: 100vw;  
    margin:47px;
    font-family: 'Actor', sans-serif;
    font-size: 50px;
    color: #FFFFFF;
    text-shadow: 2px 2px 2px  #FFCDF4,
    2px 2px 0 #FFCDF4,
    2px 2px 0 #FFCDF4,
    2px 2px 0 #FFCDF4;
    text-align:center;
    position:absolute;
    display:flex;
    z-index:-4;" <div>test your knowledge 
    <div id="quiz"> </div>
    <button style="
    background-color: #EEE5FF;
    border: 7px solid #FFFFFF;
    border-radius: 12px;
    width: 40px;
    padding: 15px 32px;
    text-align: center;
    display: flex;
    font-size: 22px;
    margin: 4px 2px;
    cursor: pointer;
    font-family: 'Actor', sans-serif;
    position: absolute;
  left: 230px;
  top: 50vw;
  z-index: 1;"
    onclick="truee()">true</button>
    <button style="background-color: #EEE5FF;
    border: 7px solid #FFFFFF;
    border-radius: 12px;
    width: 40px;
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
    

    </div> `;
}

function truee(){
    document.getElementById('quiz').innerHTML="That is correct";
    document.getElementById('quiz').style.color="green";
}

function falsee(){
    document.getElementById('quiz').innerHTML="That is not correct";
}
