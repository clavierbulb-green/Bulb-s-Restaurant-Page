import header from "./header";
import footer from "./footer";

const init = (app) => {
  const TITLE = "Bulb's";
  const TABS = ["home", "about", "contact", "menus"]
  const CITATION = "Photo by Jakub Kapusnak on Unsplash";
  const main = document.createElement("main");

  header(app, TITLE, TABS);
  app.appendChild(main);
  footer(app, CITATION);
}

export default init
