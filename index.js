/*
MAPPING

COPYRIGHT CARTO, COPYRIGHT OpenStreetMap contributors
*/
new maplibregl.Map({
  container: "map",
  style: "https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json",
  center: [-76.13928, 43.0352339],
  zoom: 12,
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
