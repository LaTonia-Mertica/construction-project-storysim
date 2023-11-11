function showSubpage(pageId) {
  let page = document.getElementById(pageId);
  page.classList.add("active");
}

function hideSubpage(pageId) {
  let page = document.getElementById(pageId);
  page.classList.remove("active");
}
