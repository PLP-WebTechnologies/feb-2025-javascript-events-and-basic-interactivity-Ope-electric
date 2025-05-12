// Button Click Event
document.getElementById("colorBtn").addEventListener("click", () => {
  document.body.style.backgroundColor = "#e0ffe0";
});

// Hover Effect
const hoverBox = document.getElementById("hoverBox");
hoverBox.addEventListener("mouseenter", () => {
  hoverBox.style.backgroundColor = "#ffd";
});
hoverBox.addEventListener("mouseleave", () => {
  hoverBox.style.backgroundColor = "#eee";
});

// Keypress Detection
document.getElementById("keyInput").addEventListener("keypress", (e) => {
  document.getElementById("keyResult").textContent = `You typed: ${e.key}`;
});

// Secret Double Click
document.getElementById("secretBtn").addEventListener("dblclick", () => {
  document.getElementById("secretMessage").textContent = "🎉 You found the secret!";
});

// Image Gallery
let images = [
  "https://via.placeholder.com/300?text=Image+1",
  "https://via.placeholder.com/300?text=Image+2",
  "https://via.placeholder.com/300?text=Image+3"
];
let currentImage = 0;
function changeImage() {
  currentImage = (currentImage + 1) % images.length;
  document.getElementById("galleryImage").src = images[currentImage];
}

// Accordion
document.querySelector(".accordion").addEventListener("click", function () {
  const panel = this.nextElementSibling;
  panel.style.display = panel.style.display === "block" ? "none" : "block";
});

// Form Validation
document.getElementById("myForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const msg = document.getElementById("formMsg");

  if (!email.value.includes("@")) {
    msg.textContent = "❌ Enter a valid email!";
    return;
  }

  if (password.value.length < 8) {
    msg.textContent = "❌ Password must be at least 8 characters.";
    return;
  }

  msg.textContent = "✅ Form submitted successfully!";
});
