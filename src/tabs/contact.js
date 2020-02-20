const createMainContent= (main, greeting="Contact Us") => {
  const copyGreeting = document.createElement("h2");
  copyGreeting.classList.add("copy-greeting");
  copyGreeting.classList.add("heading");
  copyGreeting.textContent = greeting;

  const copy = document.createElement("p");
  copy.textContent = "Sed id semper risus in hendrerit gravida rutrum. Sit amet mattis vulputate enim nulla aliquet porttitor. Magna fermentum iaculis eu non diam phasellus.";
  main.appendChild(copyGreeting);
  main.appendChild(copy);
}

export default createMainContent;
