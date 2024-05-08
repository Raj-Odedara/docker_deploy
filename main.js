const http = require('http');
const fs = require('fs');

// ANSI escape codes for color formatting
const redColor = "\x1b[31m"; // Red color
const resetColor = "\x1b[0m"; // Reset color

// Function to print text in red color
function printRed(text) {
    console.log(redColor + text + resetColor);
}

// Main function
function main() {
    // Serve index.html
    http.createServer(function (req, res) {
        fs.readFile('index.html', function(err, data) {
            if (err) {
                res.writeHead(404);
                res.end(JSON.stringify(err));
                return;
            }
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        });
    }).listen(8080, () => {
        printRed("Server running at http://localhost:8000/");
    });
}

// Call the main function
main();
