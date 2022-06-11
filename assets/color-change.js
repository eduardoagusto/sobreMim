function theme(element) {
  console.log(element.getAttribute("flag"));

  if (element.getAttribute("flag") == "dark") {
    var img = document.querySelector("#image");
    document.body.style.setProperty("--green", "black");
    document.body.style.setProperty("--black", "white");
    img.setAttribute("src", "./img/onMatrix-black.png");
    element.setAttribute("flag", "light");
  } else {
    var img = document.querySelector("#image");
    document.body.style.setProperty("--green", "#2dfc52");
    document.body.style.setProperty("--black", "#000000");
    img.setAttribute("src", "./img/onMatrix2.png");
    element.setAttribute("flag", "dark");
  }
}
