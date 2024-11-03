function toggleAccordion() {
    const content = document.querySelector(".accordion-content");
    const icon = document.querySelector(".icon img");
  
    if (content.style.display === "block") {
      content.style.display = "none";
      icon.src = "./assets/images/icon-plus.svg"; // "+" ikonuna geçiş yap
    } else {
      content.style.display = "block";
      icon.src = "./assets/images/icon-minus.svg"; // "-" ikonuna geçiş yap
    }
  }
  