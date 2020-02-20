const createMainContent= (main, greeting="Our Menus") => {
  const copyGreeting = document.createElement("h2");
  copyGreeting.classList.add("copy-greeting");
  copyGreeting.classList.add("heading");
  copyGreeting.textContent = greeting;

  const copy = document.createElement("p");
  copy.textContent = "Egestas purus viverra accumsan in nisl nisi. Volutpat ac tincidunt vitae semper quis lectus. Sed adipiscing diam donec adipiscing tristique risus nec feugiat in. Vel turpis nunc eget lorem dolor sed viverra ipsum nunc. Aliquet eget sit amet tellus cras adipiscing enim. Sit amet dictum sit amet justo. Erat nam at lectus urna duis convallis convallis. Quisque non tellus orci ac auctor. Mi eget mauris pharetra et ultrices neque ornare. Neque ornare aenean euismod elementum nisi. Augue lacus viverra vitae congue eu. Sem et tortor consequat id porta nibh venenatis. Quis blandit turpis cursus in hac habitasse. Non diam phasellus vestibulum lorem sed risus ultricies tristique nulla. Id nibh tortor id aliquet lectus proin nibh nisl. Viverra vitae congue eu consequat ac.";
  main.appendChild(copyGreeting);
  main.appendChild(copy);
}

export default createMainContent;
