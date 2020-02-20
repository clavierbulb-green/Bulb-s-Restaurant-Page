const header = (app) => {

  /* create header */
  const header = document.createElement("header");

  const headline = document.createElement("h1");
  headline.classList.add("headline");
  headline.classList.add("heading");
  headline.textContent = "Bulb's";

  const nav = document.createElement("nav");
  nav.classList.add("head-nav");
  
  const navList = document.createElement("ul");
  const aboutTab = document.createElement("li");
  aboutTab.setAttribute("id", "about-tab");
  aboutTab.textContent = "About";

  const contactTab = document.createElement("li");
  contactTab.setAttribute("id", "contact-tab");
  contactTab.textContent = "Contact";

  const menusTab = document.createElement("li");
  menusTab.setAttribute("id", "menus-tab");
  menusTab.textContent = "Menus";

  navList.appendChild(aboutTab);
  navList.appendChild(contactTab);
  navList.appendChild(menusTab);

  nav.appendChild(navList);

  header.appendChild(headline);
  header.appendChild(nav);

  app.appendChild(header);
}

export default header
