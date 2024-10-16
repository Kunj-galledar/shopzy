// Function to apply fade-in/fade-out effect to the specified box
function openBox(box) {
    // box.style.display = "block"; // Ensure the box is displayed
    setTimeout(() => {
        box.classList.add("show"); // Trigger fade-in
    }, 10); // Small delay for smooth transition

    setTimeout(() => {
        closeBox(box);
    }, Math.random() * (10000 - 5000) + 5000); // Random time between 5-10 seconds
}

function closeBox(box) {
    box.classList.remove("show"); // Trigger fade-out
    setTimeout(() => {
        box.style.display = "none"; // Hide the box after fade-out
    }, 500); // Wait for fade-out transition
}

// Get all buttons and boxes
const buttons = document.querySelectorAll(".notify-box");
const boxes = document.querySelectorAll(".notification-box");

// Add event listener to each button to open the corresponding box
buttons.forEach((button, index) => {
    button.addEventListener("click", () => openBox(boxes[index]));
});