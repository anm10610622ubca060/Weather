// Function to display an alert when the button is clicked
function sayHello() {
    alert("Hello! Thanks for visiting.");
}

// Function to change the text of a paragraph
function changeText() {
    document.getElementById("text").innerText = "You clicked the button!";
}

// Function to change the background color randomly
function changeBackgroundColor() {
    const colors = ["#FF5733", "#33FF57", "#3357FF", "#F3FF33", "#FF33A8"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}

// Event listener to run when the document is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("changeTextBtn").addEventListener("click", changeText);
    document.getElementById("changeColorBtn").addEventListener("click", changeBackgroundColor);
})
