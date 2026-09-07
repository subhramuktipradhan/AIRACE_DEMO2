```javascript
const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {

    // Health check endpoint
    if (req.url === "/health") {
        res.writeHead(200, { "Content-Type": "application/json" });

        res.end(JSON.stringify({
            status: "UP",
            application: "AIRACE Demo 2",
            timestamp: new Date().toISOString()
        }));

        return;
    }

    // API status endpoint
    if (req.url === "/api/status") {
        res.writeHead(200, { "Content-Type": "application/json" });

        res.end(JSON.stringify({
            application: "AIRACE Demo 2",
            version: "1.0.0",
            environment: "Docker",
            status: "Running"
        }));

        return;
    }

    // Main application page
    res.writeHead(200, { "Content-Type": "text/html" });

    res.end(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>AIRACE Demo 2</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    text-align: center;
                    margin-top: 80px;
                    background: #f4f6f8;
                }

                .container {
                    background: white;
                    padding: 40px;
                    margin: auto;
                    max-width: 600px;
                    border-radius: 10px;
                    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
                }

                h1 {
                    margin-bottom: 10px;
                }

                .status {
                    color: green;
                    font-weight: bold;
                }

                a {
                    display: inline-block;
                    margin: 10px;
                    padding: 10px 20px;
                    text-decoration: none;
                    background: #333;
                    color: white;
                    border-radius: 5px;
                }
            </style>
        </head>

        <body>
            <div class="container">
                <h1>AIRACE Demo 2</h1>

                <p>Node.js application running successfully.</p>

                <p class="status">● Application Status: UP</p>

                <p>Environment: Docker</p>

                <a href="/health">Health Check</a>
                <a href="/api/status">API Status</a>
            </div>
        </body>
        </html>
    `);
});

server.listen(PORT, () => {
    console.log(`AIRACE Demo 2 running on port ${PORT}`);
});
```
