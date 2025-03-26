const fs = require('fs');

fs.writeFileSync('example.txt', 'Hello, 😊!', 'utf8');

// Start reading the file asynchronously
fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log('File Content:\n', data);
});

// Non-blocking execution: This runs while the file is being read
console.log('File reading in progress...');
