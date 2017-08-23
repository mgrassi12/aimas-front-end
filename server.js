const express = require("express");
const http = require("http");
const compression = require("compression");
const compressible = require("compressible");
const path = require("path");

// Create New Server
const app = express();

// Config
app.use(Loger);
app.use(compression({ filter: shouldCompress }));
app.use(express.static(path.join(__dirname, "dist")));

// Requests
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "dist/index.html"));
});

// Port
const port = process.env.port || process.env.PORT || 4200;
app.set("port", port);

// Start Server
app.listen(port, () => {
    console.log("Server is Running");
});


// Functions

// Compress
function shouldCompress(req, res) {
    var type = res.get("Content-Type");

    if (type === undefined || !compressible(type)) {
        return false
    }
    console.log('Compressing: ', req.originalUrl)
    return true
}

// Loging
function Loger(req, res, next) {
    console.log(`GOT REQUEST: ${req.originalUrl}`);
    next();
}
