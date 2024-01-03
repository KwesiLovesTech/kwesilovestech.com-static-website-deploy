document.addEventListener('DOMContentLoaded', function () {
    // Check if the 'visitorCount' key exists in localStorage
    if (!localStorage.getItem('visitorCount')) {
        // If not, initialize it to 0
        localStorage.setItem('visitorCount', 0);
    }

    // Get the current visitor count from localStorage
    let currentCount = parseInt(localStorage.getItem('visitorCount'));

    // Increment the count by 1 for each visit
    currentCount++;

    // Update the counter element on the webpage
    document.getElementById('visitorCounter').innerText = currentCount;

    // Save the updated count back to localStorage
    localStorage.setItem('visitorCount', currentCount.toString());
});
