import header from "./header";
import footer from "./footer";

const init = (app) => {
  /* parametrize (send tab names to header) */
  header(app);
  
  const main = document.createElement("main");
  app.appendChild(main);

  footer(app);
}

export default init
