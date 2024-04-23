document.addEventListener("DOMContentLoaded", function () {
  const categoryLinks = document.querySelectorAll(".category-item__link");

  categoryLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      categoryLinks.forEach(function (link) {
        link.parentNode.classList.remove("category-item--active");
      });

      this.parentNode.classList.add("category-item--active");

      const category = this.dataset.category;
      const productItems = document.querySelectorAll(".home-product-item");

      productItems.forEach(function (item,index) {
        if (category === "all" || item.classList.contains(category)) {
          item.parentElement.style.display = "block"
        } else {
            item.parentElement.style.display = "none"
        }
      });
    });
  });
});
