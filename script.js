// Intro section carousel

const introSelectors = document.querySelectorAll(".introSelector");
const introAnimals = document.querySelectorAll(".introAnimal");
introSelectors.forEach((button, index) => {
  button.addEventListener("click", () => {
    // First, I want to use forEach loops to remove the classes applied to the introAnimal and introSelector elements. These classes are what display the active image and indicate the given selector as being active.
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

// Work section carousel

// This code block uses the same process as the Intro carousel.
const workSelectors = document.querySelectorAll(".work li");
const workGalleries = document.querySelectorAll(".workShowcase");
workSelectors.forEach((selector, index) => {
  selector.addEventListener("click", () => {
    // First I remove the display and highlight classes from the galleries as well as the list items.
    workSelectors.forEach((i) => {
      i.classList.remove("activeWork");
    });
    workGalleries.forEach((i) => {
      i.classList.remove("activeShowcase");
    });
    // Then I simply re-add the styling classes to display the desired gallery and highlight the desired li, indicating which gallery is active.
    workSelectors[index].classList.add("activeWork");
    workGalleries[index].classList.add("activeShowcase");
  });
});

// Services section carousel

// Again, same process:
const serviceSelectors = document.querySelectorAll(".serviceSelector li");
const serviceArticles = document.querySelectorAll(".serviceInfo");
serviceSelectors.forEach((selector, index) => {
  selector.addEventListener("click", () => {
    // 1 - Remove display classes.
    serviceSelectors.forEach((i) => {
      i.classList.remove("activeService");
    });
    serviceArticles.forEach((i) => {
      i.classList.remove("activeServiceInfo");
    });
    // 2 - Re-add display classes to appropriate items.
    serviceSelectors[index].classList.add("activeService");
    serviceArticles[index].classList.add("activeServiceInfo");
  });
});

// Process section carousel

// For this block of code, I've gone with a different approach since this utilizes "previous slide" and "next slide" buttons.

// The "x" variable will be used to mark which elements need to have classes applied to them.
let x = 0;

// I start out with the standard selector and article variables. Clicking a selector will change x to the appropriate index and run the processDisplay function, which will be detailed below.
const processSelectors = document.querySelectorAll(".process li");
const processArticles = document.querySelectorAll(".processInfo");
processSelectors.forEach((selector, index) => {
  selector.addEventListener("click", () => {
    x = index;
    processDisplay();
  });
});

// Next I declare variables selecting the left and right arrows. Left will decrement x by one, while right will increment it. Both arrows then run the processDisplay function.
const leftArrow = document.querySelector(".fa-arrow-left-long");
leftArrow.addEventListener("click", () => {
  x--;
  processDisplay();
});
const rightArrow = document.querySelector(".fa-arrow-right-long");
rightArrow.addEventListener("click", () => {
  x++;
  processDisplay();
});

// The core of this code block lies in this function:
const processDisplay = () => {
    // As usual, I first remove every display class.
  processSelectors.forEach((i) => {
    i.classList.remove("activeProcess");
  });
  processArticles.forEach((i) => {
    i.classList.remove("activeProcessInfo");
  });
// And then I re-add the appropriate display classes, but now I use the x variable instead of an "index" argument to track which elements need display classes.
  processSelectors[x].classList.add("activeProcess");
  processArticles[x].classList.add("activeProcessInfo");

// The below code will then render the left and/or right arrows depending on x's value. If x = 0, the first process article should be displayed and therefore the left arrow should be hidden. If x is at its maximum and the last process article is shown, then the right arrow should be hidden. If neither the first or last articles are displayed, both arrows should display.
  if (x === 0) {
    leftArrow.style.visibility = "hidden";
    rightArrow.style.visibility = "visible";
  } else if (x === processSelectors.length - 1) {
    leftArrow.style.visibility = "visible";
    rightArrow.style.visibility = "hidden";
  } else {
    leftArrow.style.visibility = "visible";
    rightArrow.style.visibility = "visible";
  }
};
// Finally, I simply run the above function once on initial page load so that everything is set up to run :)
processDisplay();