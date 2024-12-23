document.addEventListener("DOMContentLoaded", function () {
    // Select the header title element (adjust the selector based on your theme's structure)
    const headerTitle = document.querySelector(".md-ellipsis");
    
    // Check if the title exists on the page
    if (headerTitle) {
        // Change the title dynamically
        const newTitle = "Eclipse AI Assistant";
        headerTitle.textContent = newTitle;
    }
});