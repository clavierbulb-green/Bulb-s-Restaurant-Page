const header = (app, title, tabs) => {

  const hdr = document.createElement("header");

  const headline = document.createElement("h1");
  headline.classList.add("headline");
  headline.classList.add("heading");
  headline.textContent = title;
  hdr.appendChild(headline);

  const nav = document.createElement("nav");
  nav.classList.add("head-nav");
  
  const navList = document.createElement("ul");

  tabs.forEach(tabName => {
    const tab = document.createElement("li");
    tab.classList.add("tab");
    if (tabName === "home") {
      tab.classList.add("current");
    }
    tab.dataset.name = tabName;

    const tabLink = document.createElement("a"); 
    tabLink.classList.add("tab-link");
    tabLink.textContent = tabName;
    tab.appendChild(tabLink);
    navList.appendChild(tab);
  });

  nav.appendChild(navList);
  hdr.appendChild(nav);

  app.appendChild(hdr);
}

export default header
