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
    filterRow.classList.remove("filter-active-img-row");
  });
  filterRow.addEventListener("click", function () {
    catalogChangeStyle.classList.remove("catalog-flex");
    filterColumn.classList.remove("filter-active-img");
    catalogItem.forEach((e) => {
      e.classList.remove("catalog-item-column");
    });
  });
}

if (localStorage.getItem("addClass")) {
  const targetClass = localStorage.getItem("addClass");
  const targetCatalog = localStorage.getItem("addCatalogFlex");
  const targetActiveImg = localStorage.getItem("addActiveImg");
  $(".catalog").addClass(targetCatalog);
  $(".filter-bar-btn-column").addClass(targetActiveImg);
  $(".catalog-item").each(function () {
    $(this).addClass(targetClass);
  });
} else {
  const targetActiveImgRow = localStorage.getItem("test");
  $(".filter-bar-btn-row").addClass(targetActiveImgRow);
}

$(".filter-bar-btn-row").on("click", function () {
  $(".filter-bar-btn-row").addClass("filter-active-img-row");
  localStorage.setItem("test", "filter-active-img-row");
});

$(".filter-bar-btn-column").on("click", function () {
  $(".catalog").addClass("catalog-flex");
  localStorage.setItem("addCatalogFlex", "catalog-flex");
  $(".filter-bar-btn-column").addClass("filter-active-img");
  localStorage.setItem("addActiveImg", "filter-active-img");
  $(".catalog-item").each(function () {
    $(this).addClass("catalog-item-column");

    localStorage.setItem("addClass", this.classList[1]);
  });
});

$(".filter-bar-btn-column").on("click", function () {
  localStorage.removeItem("addActiveImgRow");
});

$(".filter-bar-btn-row").on("click", function () {
  localStorage.removeItem("addCatalogFlex");
  localStorage.removeItem("addActiveImg");
  $(".catalog-item").each(function () {
    $(this).removeClass("catalog-item-column");
    localStorage.removeItem("addClass");
  });
});
