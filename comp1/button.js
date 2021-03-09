function NextPage(url) {
    return `
    <div id="button" onclick="NextPage('quiz.html')" style="
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
    left: 240px;
    top: 80vw;
  z-index: 1;"
  <div onclick="NextPage('./quiz.html')">
  Start Quiz
</div>
	</div>
    </div> `;
}