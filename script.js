// Function to fetch the visit count from GitHub's API and update the counter
function updateVisitCounter() {
    // Fetch the visit count from GitHub's API
    fetch('https://api.github.com/repos/furqan0507/furqan0507.github.io')
        .then(response => response.json())
        .then(data => {
            const visitCount = data.watchers_count;
            document.getElementById('counter').textContent = visitCount;
        })
        .catch(error => {
            console.error('Error fetching visit count:', error);
        });
}

// Call the function to update the counter when the page loads
updateVisitCounter();
