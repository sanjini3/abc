const http = require("http");

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/plain");

    if (req.method === "GET") {
        switch (req.url) {
            case "/home":
                res.writeHead(200);
                res.end("Welcome to Home");
                break;

            case "/about":
                res.writeHead(200);
                res.end("About Us");
                break;

            case "/contact":
                res.writeHead(200);
                res.end("Contact Us at contact@example.com");
                break;

            default:
                res.writeHead(404);
                res.end("404 Not Found");
                break;
        }
    } else {
        res.writeHead(405);
        res.end("405 Method Not Allowed");
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
