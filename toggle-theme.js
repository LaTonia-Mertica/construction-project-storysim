function toggleTheme() {
  let element = document.body;
  element.classList.toggle("toggle-theme");

  new maplibregl.Map({
    container: "map",
    style: "https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json",
    center: [-75.4057828769, 43.225158266],
    zoom: 15,
  });

  document.body.style.backgroundColor = "#1A170F";
  document.body.querySelector("i.toggleBtn.fa-dumpster").style.color =
    " #1A170F";
  document.body.style.color = "#FFF";
  document.body.querySelector("h1").style.color = "#EEE5D8";
  document.body.querySelector("span").style.textShadow = ".025em 0 0 #FFF";
  document.body.querySelector("button").style.backgroundColor = "#FFF";
}
