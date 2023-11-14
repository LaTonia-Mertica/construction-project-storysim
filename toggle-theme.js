function toggleTheme() {
  let element = document.body;
  element.classList.toggle("toggle-theme");

  if (element.classList.contains("toggle-theme")) {
    new maplibregl.Map({
      container: "map",
      style: "https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json",
      center: [-75.4057828769, 43.225158266],
      zoom: 15,
    });
  } else {
    new maplibregl.Map({
      container: "map",
      style: "https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json",
      center: [-75.4057828769, 43.225158266],
      zoom: 15,
    });
  }
}
