var http = require('http');
var fs = require('fs');
var url = require('url');
var app = http.createServer(function(request, response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var title = queryData.id;

    if(path.name == '/'){
        
    }

    fs.readFile(`descriptions/${title}.js`,"utf-8",function(err, description){
        var template = `
            <!doctype html>
            <head>
                <title>WEB1 - ${title}</title>
                <meta charset="utf-8">
            </head>
            <body>
                <h1><a href = '/'>WEB</a></h1>
                    <ol>
                        <li><a href = '/?id=html'>HTML</a></li>
                        <li><a href = '/?id=css'>css</a></li>
                        <li><a href = '/?id=javascript'>javascript</a></li>
                    </ol>
                <h2>${title}</h2>
                <p>${description}</p>
            </body>`;
            response.writeHead(200);
            response.end(template);
        })
});
app.listen(3000);