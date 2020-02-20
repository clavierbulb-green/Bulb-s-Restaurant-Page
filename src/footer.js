const footer = (app, citation) => {
  const footer = document.createElement("footer");
  const cite = document.createElement("cite");
  cite.textContent = citation;
  footer.appendChild(cite);
  app.appendChild(footer);
}

export default footer;
