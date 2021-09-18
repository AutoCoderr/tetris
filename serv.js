const http = require('http'),
    url = require('url'),
    fs = require('fs');

const server = http.createServer(function(req, res) { // --------------------------> LE SERVEUR HTTP <------------------------------------------------------
    let page = url.parse(req.url).pathname;
    if (page == "/") {
        page = "/index.html"
    }
    page = __dirname + page
    const ext = page.split(".")[page.split(".").length-1]
    if (['png','jpg','gif','jpeg','bmp','tif','tiff','ico'].includes(ext)) {
        fs.readFile(page, function(error, content) {
            if(error){
                res.writeHead(404, {"Content-Type": "text/plain"});
                res.end("ERROR 404 : Page not found");
            } else {
                res.writeHead(200, {"Content-Type": "image/" + ext});
                res.end(content);
            }
        });
    } else if (ext === 'mp3') {
        fs.stat(page, function(error,stats) {
            if (error) {
                res.writeHead(500, {"Content-Type": "text/plain"});
                res.end("500 : INTERNAL ERROR");
            } else {
                res.writeHead(200, {
                    'Content-Type': 'audio/mp3',
                    'Content-Length': stats.size
                });
                fs.createReadStream(page).pipe(res);
            }
        });
    } else {
        fs.readFile(page, 'utf-8', function(error, content) {
            if(error || page === "./serv.js"){
                res.writeHead(404, {"Content-Type": "text/plain"});
                res.end("ERROR 404 : Page not found");
            } else {
                res.writeHead(200, {"Content-Type": "text/html"});
                res.end(content);
            }
        });
    }
});

server.listen(3001)
