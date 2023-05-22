// Intro section carousel

const introSelectors = document.querySelectorAll(".introSelector");
const introAnimals = document.querySelectorAll(".introAnimal");
introSelectors.forEach((button, index) => {
  button.addEventListener("click", () => {
    // First, I want to use forEach loops to remove the classes applied to the introAnimal and introSelector elements.
    introSelectors.forEach((i) => {
      i.classList.remove("activeSelection");
    });
    introAnimals.forEach((i) => {
      i.classList.remove("activeImage");
    });
    // Next, I'll re-add the active classes to the specific introAnimal and introSelector that corresponds with the index of the button clicked.
    introSelectors[index].classList.add("activeSelection");
    introAnimals[index].classList.add("activeImage");
    // Finally, I'm going to use a switch statement to apply some changes to the h3 and hr elements so that they line up with their corresponding selector.
    const introHeading = document.querySelector(".intro h3");
    const headingLine = document.querySelector(".intro hr");
    console.log(headingLine);
    switch (index) {
      case 0:
        introHeading.style.paddingTop = "0";
        introHeading.style.paddingBottom = "8rem";
        introHeading.innerText = "This is Fox";
        headingLine.style.marginTop = "0";
        headingLine.style.marginBottom = "8rem";

        break;
      case 1:
        introHeading.style.paddingTop = "0";
        introHeading.style.paddingBottom = "0";
        introHeading.innerText = "This is Bird";
        headingLine.style.marginTop = "0";
        headingLine.style.marginBottom = "0";

        break;
      case 2:
        introHeading.style.paddingTop = "8rem";
        introHeading.style.paddingBottom = "0";
        introHeading.innerText = "This is Turtle";
        headingLine.style.marginTop = "8rem";
        headingLine.style.marginBottom = "0";

        break;
    }
  });
});