function Menu() {
    return `
    <div id="menu" style="
    position:fixed;
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
        font-size: 20px;
        position:absolute;"
        onclick="HandleOpen()">open</button>
        <div>
            <div><a href="page2.html">About Page</a></div>
            <div>What kind of cats can you adopt?</div>
            <div>where should you adopt from </div>
            <div>how much does it cost to adopt a cat</div>
        </div>
    </div> `;
}

var menu_class = "close";
function HandleOpen() {
    if (
        menu_class == "close"
    ) {
        menu_class = "open";
        document.querySelector("#menu").style.left = "0px";
    }
    else {
        menu_class = "close";
        document.querySelector("#menu").style.left = "-100px";
    }

}