(() => {
  /* 
    MAIN TODO: FIX THE COMMENTS AND FUCNTIONS OF BOTH JS files, THEY DONT WORK, 
    ADD A DOCUMENTATION PAGE THAT EXPLAINS THE EXECUTION ORDER OF THE FILES AND WAHT THEY DO


    TODO: add functionality to scan html for common elements that will need to be filled in 
    e.g. name, email, phone number, school, major, degree, from, to, skills, etc
    ! THIS IS THE PURPOSE OF ACTIVATE.JS

    * save.js will save the data to the json file or the mongodb database

    TODO: add functionality to autofill data, DO NOT FILL IN FIELDS THAT HAVE ALREADY BEEN FILLED
    ! THIS IS THE PURPOSE OF ACTIVATE.JS

    TODO: add HTML dom manipulation to place buttons under fields for two options:
    ! THIS IS THE PURPOSE OF ACTIVATE.JS
            1. in case an new peice of information would like to be saved
            This html popup should request the user write a key to save the data under to the json file
            2. in case the field was not filled in
            This html popup would display the data from the json file that could be filled in.

            ! There has to be a way to better detect how certain questions relate to certain answers saved
            ? matching the label to the answers? what there are multiple labels that relate to the same answer?


    
    */

  /**
   * Check and set a global guard variable.
   * If this content script is injected into the same page again,
   * it will do nothing next time.
   */
  if (window.hasRun) {
    return;
  }
  window.hasRun = true;

  /**
   * Given a URL to a beast image, remove all existing beasts, then
   * create and style an IMG node pointing to
   * that image, then insert the node into the document.
   */
  function insertBeast(beastURL) {
    removeExistingBeasts();
    const beastImage = document.createElement("img");
    beastImage.setAttribute("src", beastURL);
    beastImage.style.height = "100vh";
    beastImage.className = "beastify-image";
    document.body.appendChild(beastImage);
  }

  /**
   * Remove every beast from the page.
   */
  function removeExistingBeasts() {
    const existingBeasts = document.querySelectorAll(".beastify-image");
    for (const beast of existingBeasts) {
      beast.remove();
    }
  }

  /**
   * Listen for messages from the background script.
   * Call "insertBeast()" or "removeExistingBeasts()".
   */
  browser.runtime.onMessage.addListener((message) => {
    if (message.command === "fill") {
      insertBeast(message.beastURL);
    } else if (message.command === "reset") {
      removeExistingBeasts();
    }
  });
})();
