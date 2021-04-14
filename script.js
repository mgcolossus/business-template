const headerMenu = document.querySelector(".header__menu");
const headerNav = document.querySelector(".header__nav");
const body = document.body;

headerMenu.addEventListener("click", function () {
  headerMenu.classList.toggle("active");
  headerNav.classList.toggle("active");
  body.classList.toggle("lock");
});

function showSelectedCategoryItems(type) {
  if (type === "all") {
    return newsItems.forEach((item) => {
      item.style.display = "";
    });
  }
  newsItems.forEach(item => {
    if (item.dataset.category === type) {
      item.style.display = "";
    } else {
      item.style.display = 'none';
    }
  })
}


const tabSelectorClass = ".news-and-media__tabs-item";
const tabActiveSelectorClass = "news-and-media__tabs-item_active";

const tabsSelectors = [...document.querySelectorAll(tabSelectorClass)];
const newsItems = [...document.querySelectorAll(".news-item")];

for (tabSelector of tabsSelectors) {
  tabSelector.addEventListener("click", function (e) {
    tabsSelectors.forEach((tab) => {
      if (tab.classList.contains(tabActiveSelectorClass)) {
        tab.classList.remove(tabActiveSelectorClass);
      }
      e.target.classList.add(tabActiveSelectorClass);
      showSelectedCategoryItems(e.target.dataset.category);
    });
  });
}