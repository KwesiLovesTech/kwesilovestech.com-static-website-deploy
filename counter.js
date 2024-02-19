const counter = document.querySelector(".counter-number");

async function updateCounter() {
     {
        // Wait for the fetch request to complete
        let response = await fetch("https://53mbq3nrcpphycegrtdwso3sve0dshal.lambda-url.us-east-1.amazonaws.com/");
        
        // Check if the response was successful
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
        // Parse the JSON response
        let data = await response.json();
        
        // Update the counter element with the retrieved views
        counter.innerHTML = `<span style="font-family:Courier New,Courier,monospace;font-size:16px;font-weight:bold; opacity: 0; transition: opacity 1s;">Views: ${data}</span>`;
        
        // Trigger a reflow before changing opacity to ensure the transition effect is applied
        counter.offsetHeight;
        
        // Fade in the counter element
        counter.firstChild.style.opacity = 1;
    } 
}

// Call the function to update the counter when needed
updateCounter();
