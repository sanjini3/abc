const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/plain");

    if (req.method === "GET") {
        const parsedUrl = url.parse(req.url, true); 

        if (parsedUrl.pathname === "/greet") {
            const name = parsedUrl.query.name || "San"; 
            res.writeHead(200);
            res.end(`Hello, ${name}!`);
        } else {
            res.writeHead(404);
            res.end("404 Not Found");
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
