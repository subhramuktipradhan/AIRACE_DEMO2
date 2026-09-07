const http = require("http");

const PORT = 3000;

// Temporary in-memory employee data
let employees = [
    {
        id: 1,
        name: "Subhra",
        role: "Data Engineer",
        department: "Technology"
    },
    {
        id: 2,
        name: "Rahul",
        role: "DevOps Engineer",
        department: "Technology"
    },
    {
        id: 3,
        name: "Priya",
        role: "Data Analyst",
        department: "Analytics"
    }
];

const server = http.createServer((req, res) => {

    // Enable JSON responses
    res.setHeader("Content-Type", "application/json");

    // GET /health
    if (req.method === "GET" && req.url === "/health") {
        res.writeHead(200);
        res.end(JSON.stringify({
            status: "UP",
            application: "AIRACE Demo 2"
        }));
        return;
    }

    // GET /api/status
    if (req.method === "GET" && req.url === "/api/status") {
        res.writeHead(200);
        res.end(JSON.stringify({
            application: "AIRACE Demo 2",
            version: "1.0.0",
            environment: "Docker",
            status: "Running"
        }));
        return;
    }

    // GET /api/employees
    if (req.method === "GET" && req.url === "/api/employees") {
        res.writeHead(200);
        res.end(JSON.stringify(employees));
        return;
    }

    // GET /api/employees/:id
    if (req.method === "GET" && req.url.startsWith("/api/employees/")) {

        const id = parseInt(req.url.split("/")[3]);

        const employee = employees.find(emp => emp.id === id);

        if (!employee) {
            res.writeHead(404);
            res.end(JSON.stringify({
                error: "Employee not found"
            }));
            return;
        }

        res.writeHead(200);
        res.end(JSON.stringify(employee));
        return;
    }

    // 404 - Route not found
    res.writeHead(404);
    res.end(JSON.stringify({
        error: "Route not found"
    }));
});

server.listen(PORT, () => {
    console.log(`AIRACE Demo 2 backend running on port ${PORT}`);
});