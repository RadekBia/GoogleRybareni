function setupFloatingLabel() {
  const inputs = document.querySelectorAll("input");
  
  inputs.forEach(input => {
    const label = input.nextElementSibling; // nebo najít label jinak
    
    // Zkontrolovat při načtení stránky (pokud je input vyplněný)
    if (input.value.length > 0) {
      label.classList.add("active");
    }
    
    // Při fokusiaci na input
    input.addEventListener("focus", function () {
      label.classList.add("active");
    });
    
    // Při ztrátě fokusu
    input.addEventListener("blur", function () {
      if (input.value.length > 0) {
        label.classList.add("active");
      } else {
        label.classList.remove("active");
      }
    });
    
    // Také při psaní (pokud uživatel používá autofill)
    input.addEventListener("input", function () {
      if (input.value.length > 0) {
        label.classList.add("active");
      }
    });
  });
}

// Spustit při načtení stránky
document.addEventListener("DOMContentLoaded", setupFloatingLabel);
