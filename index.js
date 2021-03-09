function HamburgerClick() {
  document.querySelector(".menu_items").style.opacity = "100%";
  document.querySelector(".menu_items").style.display = "flex";
}

function ExitMenu() {
  document.querySelector(".menu_items").style.display = "none";
}

function Quiz() {
  document.getElementById('quizcard').innerHTML = "That is correct";
  document.getElementById('quizcard').style.color = "green";
}

function Quiz() {
  document.getElementById('quizcard').innerHTML = "That is not correct";
}


function NextPage(url){
	location.href = url;
}