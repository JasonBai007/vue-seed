const PORT = 3000
const TYPE = {
    "css": "text/css",
    "gif": "image/gif",
    "html": "text/html",
    "ico": "image/x-icon",
    "jpeg": "image/jpeg",
    "jpg": "image/jpeg",
    "js": "text/javascript",
    "json": "application/json",
    "pdf": "application/pdf",
    "png": "image/png",
    "svg": "image/svg+xml",
    "swf": "application/x-shockwave-flash",
    "tiff": "image/tiff",
    "txt": "text/plain",
    "wav": "audio/x-wav",
    "wma": "audio/x-ms-wma",
    "wmv": "video/x-ms-wmv",
    "xml": "text/xml"
}

/*http模块，主要的应用是两部分，
一部分是http.createServer 担当web服务器，
另一部分是http.createClient，担当客户端，实现爬虫之类的工作。*/
let http = require('http');
let url = require('url');
let fs = require('fs');
let path = require('path');

let server = http.createServer((request, response) => {
    // url.parse() 将URL字符串转换成对象并返回
    // request.url 客户端请求的url地址，如http://127.0.0.1/hello/world，那么request.url就是/hello/world//
    let pathname = url.parse(request.url).pathname;

    //这里设置自己的文件夹名称
    let realPath = path.join("app", pathname);

    console.log(`pathname: ${pathname}`);
    console.log(`realPath: ${realPath}`);

    // 返回path路径文件扩展名，如果path以 ‘.' 为结尾，将返回 ‘.'，如果无扩展名 又 不以'.'结尾，将返回空值
    let ext = path.extname(realPath);
    ext = ext ? ext.slice(1) : 'unknown';

    // 测试某个路径下的文件是否存在,回调函数包含一个参数exists，true则文件存在，否则是false
    fs.exists(realPath, function(exists) {

        // 如果文件不存在，就返回一句话，说这个文件不在服务器上
        if (!exists) {
            response.writeHead(404, {
                'Content-Type': 'text/html'
            });
            response.write('<h1>404 Not Found</h1>');
            response.write("This request URL " + pathname + " was not found on this server.");
            response.end();

        } else {

            // filename（必选），表示要读取的文件名。encoding（可选），表示文件的字符编码, 默认是 utf-8。
            fs.readFile(realPath, "binary", function(err, file) {
                if (err) {

                    // writeHead(statusCode,[reasonPhrase],[headers])
                    response.writeHead(500, {
                        'Content-Type': 'text/plain'
                    });
                    response.write('<h1>Sorry, Server Error</h1>');
                    response.end(err);
                } else {

                    // 这里用到了文件类型映射表
                    let contentType = TYPE[ext] || "text/plain";
                    response.writeHead(200, {
                        'Content-Type': contentType
                    });

                    // write 写入网页内容
                    response.write(file, "binary");
                    response.end();
                }
            });
        }
    });
})

server.listen(PORT);
console.log(`Server runing at port: ${PORT}.`);
console.log(`http://localhost:${PORT}/index.html`);
