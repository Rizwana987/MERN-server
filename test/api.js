const fetch = require('node-fetch'); // Ensure you have node-fetch installed

async function fetchData() {
    try {
        const response = await fetch('http://localhost:3001/users');
        if (!response.ok) { // Check for response status
            throw new Error(`Failed to fetch: ${response.statusText}`);
        }
        const data = await response.json(); // Wait for JSON conversion
        return data;
    } catch (err) {
        console.error('Fetch error:', err);
        throw err;
    }
}

module.exports = fetchData;
