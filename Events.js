var FooButton = document.querySelector("#Foo");

var BarButton = document.querySelector("#Bar");

var FooBarButton = document.querySelector("#FooBar");

var main = document.querySelector("main");

FooButton.addEventListener("click", function () {
  var h3 = document.createElement("h3");

  h3.innerText = "Foo";
  
  main.appendChild(h3);

});
BarButton.addEventListener("click", function () {
  var h3 = document.createElement("h3");
  
  h3.innerText = "Bar";

  main.appendChild(h3);
  
});
FooBarButton.addEventListener("click", function () {
  var h2 = document.createElement("h2");

  h2.innerText = "FooBar";

  main.appendChild(h3);

});
