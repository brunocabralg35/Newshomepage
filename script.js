document.getElementById("btnMenu").addEventListener("click", () => {
  document.getElementById("pelicula").style.display = "block";
  document.body.style.overflow = "hidden";
  document.getElementById("btnMenu").style.display = "none";
  document.getElementById("btnCloseMenu").style.display = "block";
  document.getElementsByTagName("nav")[0].style.opacity = '1';
});

document.getElementById("btnCloseMenu").addEventListener("click", () => {
  document.getElementById("pelicula").style.display = "none";
  document.body.style.overflow = "visible";
  document.getElementById("btnMenu").style.display = "block";
  document.getElementById("btnCloseMenu").style.display = "none";
  document.getElementsByTagName("nav")[0].style.opacity = '0';
});
