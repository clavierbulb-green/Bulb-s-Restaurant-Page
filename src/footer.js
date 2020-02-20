const footer = (app) => {
  /*create footer */
  const footer = document.createElement("footer");
  const imgCitation = document.createElement("cite");
  imgCitation.textContent = "Photo by Jakub Kapusnak on Unsplash";
  footer.appendChild(imgCitation);
  app.appendChild(footer);
}

export default footer;
