function StartButton(url) {
    return `
    <div id="startbutton" onclick="NextPage('page2.html')" style="
    background-color: #FFE5F9;
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
  top: 60vw;
  z-index: 1;"
  <div onclick="NextPage('./page2.html')">
  Start
</div>
	</div>
    </div> `;
}