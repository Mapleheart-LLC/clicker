function sendWebhookClicker() {
    fetch("https://trigger.macrodroid.com/20105183-0b4f-4260-9f8d-33e02ade21ca/clicker")
        .then(response => response.json())
        .catch(error => console.error('Error:', error));
}

// Add an event listener for the 'clicker' button
document.getElementById('clicker').addEventListener('click', sendWebhookClicker);
