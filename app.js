let http = require('http')
let server= http.createServer((req, res)=>{
   console.log(req.method)
   res.setHeader('Content-Type', 'text/HTML')
   res.write("<!DOCTYPE html>")
   res.write("<html>")
   res.write(`<body> 
   <h2>Welcome to NodeJs Class </h2> 
    <p> Your Name <br/><input type='text'> </p>
   </body>`)
   res.end()
})
server.listen(8000)

