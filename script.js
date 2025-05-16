// 1. Console Welcome Message
console.log("Welcome to Jamal Chamakope's Portfolio Website!");

// Greeting function based on time
function greetUser() {
  const now = new Date();
  const hours = now.getHours();
  let greeting = "";

  if (hours >= 5 && hours < 12) {
    greeting = "Good morning, friend!.";
  } else if (hours >= 12 && hours < 17) {
    greeting = "Good afternoon, friend!.";
  } else if (hours >= 17 && hours < 22) {
    greeting = "Good evening, friend!.";
  } else {
    greeting = "Good night, friend!.";
  }

  const greetingElement = document.getElementById("greeting");
  if (greetingElement) {
    greetingElement.textContent = greeting;
  }
}

// 2. Handle Contact Form Submission
document.addEventListener("DOMContentLoaded", function () {
  // Greeting
  greetUser();

  // Contact form
  const contactForm = document.querySelector("#contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault(); // Prevent real form submission
      alert("Thank you for reaching out! I will get back to you soon.");
      contactForm.reset(); // Clear the form
    });
  }

  // Survey form
  const surveyForm = document.querySelector("#survey-form");
  if (surveyForm) {
    surveyForm.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Thanks for taking the survey!");
      surveyForm.reset();
    });
  }

  // Theme toggle logic
  const toggleButton = document.getElementById("theme-toggle");

  // Apply saved theme
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-theme");
  }

  toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");

    // Save theme
    if (document.body.classList.contains("dark-theme")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  });
});
