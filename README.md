# Clockworks-OS-Custom-Apps
Custom apps for the Clockworks bookmarklet.

## [Tiny Fishing](https://purepro4561.github.io/Tiny-Fishing/index.html)
```javascript
function start() {
  
  ////MADE FOR VERSION 0.12.0 SCRIPT SYSTEM////

  ////CONFIG////

  var link = "https://purepro4561.github.io/Tiny-Fishing/index.html"; // link to app webpage
  var title = "Tiny Fishing"; // title shown in navbar
  var id = "https://l413.github.io/Clockworks-OS-Custom-Apps/tinyfishing.js"; // set this to the url location of your script
  
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
```
