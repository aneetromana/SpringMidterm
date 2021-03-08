function Quiz() {
    return `
    <div id="quiz" style="
    
    width:150px;
    background-color:#F2FFF6;
    padding:10px;
    transition:left 0.5s;
    left:-100px;
    height:100vw;" 
    class="close">
        <button style="
        width:100%;
        text-align:right;
        background-color: #F2FFF6;
        border-color: #D9FEE3;
        border-radius: 6px;;
        border-width: 4px;
        font-family: 'Actor', sans-serif;
        font-size: 20px;"
        position:absolute;
        onclick="HandleOpen()"></button>
        <div>
            <div>Why Adopt?</div>
            <div>What kind of cats can you adopt?</div>
            <div>where should you adopt from </div>
            <div>how much does it cost to adopt a cat</div>
        </div>
    </div> `;
}

