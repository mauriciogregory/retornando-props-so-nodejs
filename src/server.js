// import http, { request, response } from "http";

const http = require("http");
const host = "http://localhost";
const port = "3030";
const stat = require("../src/usageRAM")

const app = http.createServer((req, res) => {
    let url = req.url;

    if(url === "/status"){
        res.write(JSON.stringify(stat,null,2))
    } else {
        res.end("<h1>Bem Vindo ao HOME</h1>")
    }

    res.end("<h1>Working</h1>")
});

app.listen(port, () => console.log(`Server is running on ${host}:${port}`))
