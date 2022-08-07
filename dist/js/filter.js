// используется на страницах catalog-list/2
let filterBtn = document.querySelector(".filter-btn");
let filter = document.querySelector(".filter");
filterBtn.addEventListener("click", () => {
  console.log("Done");
  filter.style.display = "block";
});

let catalogItem = document.querySelectorAll(".catalog-item");
let filterRow = document.querySelector(".filter-bar-btn-row");
let filterColumn = document.querySelector(".filter-bar-btn-column");
let catalogChangeStyle = document.querySelector(".catalog");

if (filterRow && filterColumn) {
  filterColumn.addEventListener("click", function () {
    catalogChangeStyle.classList.add("catalog-flex");
  });
  filterRow.addEventListener("click", function () {
    catalogChangeStyle.classList.remove("catalog-flex");
    catalogItem.forEach((e) => {
      e.classList.remove("catalog-item-column");
    });
  });
}

if (localStorage.getItem("addClass")) {
  const targetClass = localStorage.getItem("addClass");
  const targetCatalog = localStorage.getItem("addCatalogFlex");
  $(".catalog").addClass(targetCatalog);
  $(".catalog-item").each(function () {
    $(this).addClass(targetClass);
  });
}

$(".filter-bar-btn-column").on("click", function () {
  $(".catalog").addClass("catalog-flex");
  localStorage.setItem("addCatalogFlex", "catalog-flex");
  $(".catalog-item").each(function () {
    $(this).addClass("catalog-item-column");

    localStorage.setItem("addClass", this.classList[1]);
  });
});

$(".filter-bar-btn-row").on("click", function () {
  localStorage.removeItem("addCatalogFlex");
  $(".catalog-item").each(function () {
    $(this).removeClass("catalog-item-column");
    localStorage.removeItem("addClass");
  });
});
