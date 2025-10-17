const text = "Welcome to Ai4Tech!";
let i = 0;

function type() {
  if (i < text.length) {
    document.getElementById("output").textContent += text.charAt(i);
    i++;
    setTimeout(type, 100);
  }
}
window.onload = type;
