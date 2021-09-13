function myUlTagFunction() {
  document.getElementById("myUlTag2").style.display = "block";
  document.getElementById("checkedMenu").style.background = "#005266";
  document.getElementById("checkedMenu").style.color = "#ffffff";
}
function exitMyUlTagFunction() {
  document.getElementById("myUlTag2").style.display = "none";
  document.getElementById("checkedMenu").style.background = "#ffffff";
  document.getElementById("checkedMenu").style.color = "#005266";
}
function btnImage1() {
  document.getElementById("img1").style.display = "block";
  document.getElementById("img2").style.display = "none";
  document.getElementById("img3").style.display = "none";
  document.getElementById("bgImage").style.background = "#03643c";
}
function btnImage2() {
  document.getElementById("img1").style.display = "none";
  document.getElementById("img2").style.display = "block";
  document.getElementById("img3").style.display = "none";
  document.getElementById("bgImage").style.background = "#CB6382";
}
function btnImage3() {
  document.getElementById("img1").style.display = "none";
  document.getElementById("img2").style.display = "none";
  document.getElementById("img3").style.display = "block";
  document.getElementById("bgImage").style.background = "#BE479B";
}
function showLink() {
  document.getElementById("ulMyTag").style.transition = "0.4s";
  document.getElementById("ulMyTag").style.top = "90px";
}
