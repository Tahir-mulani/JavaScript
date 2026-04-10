const http = require('http');
const server = http.createServer((req,res) =>{
	console.log(req.url);
	console.log(req.method);
	res.write(`<html>
<head><title>server Page</title></head>
<body>
<h1> hello friends</h1>

</body>
</html>`);
	return res.end();
});

server.listen(5500,()=>{
		console.log("server is running on 5500");
});