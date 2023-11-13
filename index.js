/*
MAPPING
COPYRIGHT CARTO, COPYRIGHT OpenStreetMap contributors
*/
new maplibregl.Map({
  container: "map",
  style: "https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json",
  center: [-75.4057828769, 43.225158266],
  zoom: 15,
});

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
