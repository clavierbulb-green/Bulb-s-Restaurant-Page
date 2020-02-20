import init from "./init";
import home from "./tabs/home";
import about from "./tabs/about";
import contact from "./tabs/contact";
import menus from "./tabs/menus";

const app = document.querySelector("#app");

// setup page contents on page load
window.addEventListener("load", () => {
  init(app);
  const main = app.querySelector("main");
  const tabs = app.querySelectorAll(".tab");
  const clear = () => {
    while (main.firstChild) {
      main.removeChild(main.lastChild);
    }
    for (const tab of tabs) {
      tab.classList.remove("current");
    }
  };
  // load home by default
  home(main);

  for (const tab of tabs) {
    const tabName = tab.dataset.name;
    tab.addEventListener("click", () => {
      clear();
      tab.classList.add("current");
      switch (tabName) {
        case "home":
          home(main);
          break;
        case "about":
          about(main);
          break;
        case "contact":
          contact(main);
          break;
        case "menus":
          menus(main);
          break;
      }
    });
  }
});

