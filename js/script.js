
//This function breaks the page into variables,
//giving us control of how each tab effects the page
function openTab(evt, position) {
  var i, x, tablinks;

//gets each tab's display and puts them in an array x[]
  x = document.getElementsByClassName("position");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }

  //tab animation
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" w3-border-red", "");
  }

  //changes 'display:none to a visable block'
  document.getElementById(position).style.display = "block";
  evt.currentTarget.firstElementChild.className += " w3-border-red";
}

function tab1(){
  document.getElementById('publication-title').innerHTML = "Your Brain on the Movies";
}
function tab2(){
  document.getElementById('publication-title').innerHTML = "From the eyes and the heart: a novel eye-gaze metric";
}
function tab3(){
  document.getElementById('publication-title').innerHTML = "Single-trial linear correlation analysis: application to characterization";
}
function tab4(){
  document.getElementById('publication-title').innerHTML = "Spatiotemporal Linear Decoding of Brain State";
}
function tab5(){
  document.getElementById('publication-title').innerHTML = "Some Sample Information: A Title For The Ages";
}
