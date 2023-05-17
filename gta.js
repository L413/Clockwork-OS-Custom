function start() {
  
  ////MADE FOR VERSION 0.14.0 SCRIPT SYSTEM////

  ////CONFIG////

  var link = "https://zayaruzostreetorgan.com/uploads/5/5/6/7/5567194/custom_themes/850704625817689097/gas2.html"; // link to app webpage
  var title = "GTA"; // title shown in navbar
  var id = "https://l413.github.io/Clockwork-OS-Custom/gta.js"; // set this to the url location of your script

  ////SCRIPT////
  
  var ExampleLink = document.createElement("a");
  var ExampleIFrame = document.createElement("iframe");
  
  ExampleIFrame.style = "display: none;";
  ExampleIFrame.className = "app "+id;
  ExampleIFrame.id = id;
  ExampleIFrame.src = "about:blank";
  
  ExampleLink.href = "javascript:openapp('"+ ExampleIFrame.id +"','" + link + "');" ;
  ExampleLink.innerHTML = title; 
  ExampleLink.className = id; 
  ExampleLink.addEventListener('dblclick', (e) => {
    uninstallApp(ExampleIFrame.id);
  });
  ExampleLink.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    closeApp(ExampleIFrame.id);
  });
  
  document.getElementById("navbar").appendChild(ExampleLink);
  document.getElementById("main").appendChild(ExampleIFrame);
}

start();
