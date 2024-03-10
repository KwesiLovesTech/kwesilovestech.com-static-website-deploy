const counter = document.querySelector(".counter-number");

async function updateCounter() {
    try {
        // Wait for the fetch request to complete
        let response = await fetch("https://53mbq3nrcpphycegrtdwso3sve0dshal.lambda-url.us-east-1.amazonaws.com/");
        
        // Check if the response was successful
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
        // Parse the JSON response
        let data = await response.json();
        
        // Update the counter element with the retrieved data
        counter.innerHTML = `Views: ${data.views}`;
    } catch (error) {
        // Handle errors, such as network errors or JSON parsing errors
        console.error('Error updating counter:', error);
    }
}

// Call the function to update the counter when needed
updateCounter();
