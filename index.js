/*
MAPPING
COPYRIGHT CARTO, COPYRIGHT OpenStreetMap contributors
*/
const map = new maplibregl.Map({
  container: "map",
  style: "https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json",
  center: [-75.4057828769, 43.225158266],
  zoom: 15,
});

// TOGGLE THEME FN
function toggleTheme() {
  let element = document.body;
  element.classList.toggle("toggle-theme");

  if (element.classList.contains("toggle-theme")) {
    map.setStyle(
      "https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json"
    );
  } else {
    map.setStyle(
      "https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json"
    );
  }
}

/*
SUBPAGES
*/
function showSubpage(pageId) {
  let page = document.getElementById(pageId);
  page.classList.add("active");
}

function hideSubpage(pageId) {
  let page = document.getElementById(pageId);
  page.classList.remove("active");
}
