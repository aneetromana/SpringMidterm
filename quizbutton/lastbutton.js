function QuizButton(url) {
    return `
    <div id="quizbutton" onclick="NextPage('page2.html')" style="
    background-color: #EFFCFF;
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
  left: 380px;
  top: 40vw;
  z-index: 1;"
  <div onclick="NextPage('./page2.html')">
  next
</div>
	</div>
    </div> `;
}