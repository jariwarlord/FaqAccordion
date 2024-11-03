function toggleAccordion(element) {
    const content = element.nextElementSibling;
  
  
    if (content.style.display === "block") {
      content.style.display = "none";
      element.querySelector("img").src = "./assets/images/icon-plus.svg";
    } else {
      content.style.display = "block";
      element.querySelector("img").src = "./assets/images/icon-minus.svg";
    }
  }
  