// Function to update the visit counter
function updateVisitCounter() {
    // Get the current visit count from the cookie (if it exists)
    let visitCount = parseInt(getCookie('visitCount'));

    // If the cookie does not exist or cannot be parsed, set the visit count to 0
    if (isNaN(visitCount)) {
        visitCount = 0;
    }

    // Display the visit count on the website
    document.getElementById('counter').textContent = visitCount;
}

// Function to set a cookie
function setCookie(name, value, days) {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
}

// Function to get the value of a cookie
function getCookie(name) {
    const cookieValue = document.cookie.match(`(^|;)\\s*${name}\\s*=\\s*([^;]+)`);
    return cookieValue ? cookieValue.pop() : '';
}

// Function to increment the visit count and update the counter
function incrementVisitCount() {
    // Get the current visit count from the cookie (if it exists)
    let visitCount = parseInt(getCookie('visitCount'));

    // If the cookie does not exist or cannot be parsed, set the visit count to 0
    if (isNaN(visitCount)) {
        visitCount = 0;
    }

    // Increment the visit count and update the cookie
    visitCount++;
    setCookie('visitCount', visitCount, 365); // Set the cookie to expire in 365 days

    // Display the updated visit count on the website
    document.getElementById('counter').textContent = visitCount;
}

// Call the function to update the counter when the page loads
updateVisitCounter();

// Add event listener to the button to increment the visit count when clicked
document.getElementById('incrementBtn').addEventListener('click', incrementVisitCount);
