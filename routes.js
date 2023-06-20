 function reqRoutes(req, res){
    let url= req.url;
    if(url == '/add-product'){
       res.setHeader('Content-Type', 'text/HTML')
       res.write("<!DOCTYPE html>")
       res.write("<html>")
       res.write(`<body>`)
    res.write(`
    <h2>Welcome to Abdul-Store </h2> 
     <form method="POST" action="/addproduct">
     <p> Add Product<br/><input type='text'> </p>
     <input type="submit" value="Add Product">  
     </form>
   `)
   res.write(`</body>`)
    res.write("</html>")
    return res.end()
 }
 
 if(url == "/addproduct" && req.method == 'POST'){
    fs.writeFile('oic.txt', 'Submitted3', (err)=>{
 
    })
    res.statusCode=301
    res.setHeader('Location', '/')
       return  res.end()
 }
 
 
 if(url == '/products'){
    res.setHeader('Content-Type', 'text/HTML')
       res.write("<!DOCTYPE html>")
       res.write("<html>")
       res.write(`<body>`)
 res.write(`
 <h2>Product Page </h2> 
  <p> List of products </p>
 `)
 res.write(`</body>`)
 res.write("</html>")
 return res.end()
 }
 if(url =='/'){
    res.setHeader('Content-Type', 'text/HTML')
       res.write("<!DOCTYPE html>")
       res.write("<html>")
       res.write(`<body>`)
 res.write('<h2> Home Page </h2>')
 res.write(`</body>`)
 res.write("</html>")
 return res.end()
 }
 }
//  module.export=reqRoutes
//  module.exports={
//     reqres:reqRoutes,
//     moretext: "More information" 
//  }
exports.reqres=reqRoutes;
module.exports.moretext="Hello there"