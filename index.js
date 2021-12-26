var http = require("http");
var server = http.createServer(function (req, res) {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write(
    "<p>Hello Peter!<p> <img src='https://i.kym-cdn.com/entries/icons/facebook/000/038/127/hpcover.jpg'/>"
  );
  res.end();
});
server.listen(5000);
console.log("Node.js web server at port 5000 is running..");
