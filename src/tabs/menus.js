const createMainContent= (main, greeting="Our Menus") => {
  const copyGreeting = document.createElement("h2");
  copyGreeting.classList.add("copy-greeting");
  copyGreeting.classList.add("heading");
  copyGreeting.textContent = greeting;

  const copy = document.createElement("p");
  copy.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  main.appendChild(copyGreeting);
  main.appendChild(copy);
}

export default createMainContent;