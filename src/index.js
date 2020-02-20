import init from './init';

const app = document.getElementById("app");

// setup page contents on page load
window.addEventListener("load", () => {
  init(app);
});
