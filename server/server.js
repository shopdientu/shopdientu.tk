const http = require('http')

const server = http.createServer((req, res)=>{

    if(req.url === '/'){
        // res.write()
        res.end('đây là trang home')
    }
    if(req.url === '/about'){
        // res.write()
        res.end('đây là trang about')
    }
    
})

server.listen(5000)