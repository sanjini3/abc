const http = require("http");

const server = http.createServer((req, res) => {
    try {
        if (req.method === "GET") {
            if (req.url === "/") {
                res.writeHead(200, { "Content-Type": "text/plain" });
                res.end("Welcome to the home page!");
            } else if (req.url === "/about") {
                res.writeHead(200, { "Content-Type": "text/plain" });
                res.end("About us page");
            } else {
                res.writeHead(404, { "Content-Type": "text/plain" });
                res.end("404 Not Found");
            }
        } else {
            res.writeHead(405, { "Content-Type": "text/plain" });
            res.end("Method Not Allowed");
        }
    } catch (error) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("500 Internal Server Error");
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
