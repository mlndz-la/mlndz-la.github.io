export const createLoadingScreen = () => () => {
  console.log("loading");
  if (document.querySelector("#loading_screen")) {
    // Do not add a loading screen if there is already one
    document.querySelector("#loading_screen").style.display = "initial";
    return;
  }
  
};

export const removeLoadingScreen = () => () => {
  console.log("scene is now loaded");
};
