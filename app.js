var rulesDiv = document.getElementById("rules");
var slideOpen = true;
var initHeight = rulesDiv.offsetHeight;

function slideToggle() {
  if (slideOpen) {
    slideOpen = false;
    rulesDiv.style.height = "0px";
    rulesDiv.style.padding = '0px';
  } else {
    slideOpen = true;
    rulesDiv.style.height = initHeight + "px";
    rulesDiv.style.padding = '20px';
  }
}

window.onload = slideToggle
