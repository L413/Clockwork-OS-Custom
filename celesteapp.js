function start() {
  
  ////MADE FOR VERSION 0.12.0 SCRIPT SYSTEM////

  ////CONFIG////

  var link = "https://l413.github.io/Gamehub/g/zceleste"; // link to app webpage
  var title = "Celeste"; // title shown in navbar
  var id = "https://l413.github.io/Clockwork-OS-Custom/celesteapp.js"; // set this to the url location of your script
  
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
  
  document.getElementById("navbar").appendChild(ExampleLink);
  document.getElementById("main").appendChild(ExampleIFrame);
}

start();
