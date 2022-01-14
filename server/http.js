/* const {readFile} = require('fs')

console.log('started a first task')

readFile('./content/first.txt', 'utf-8', (err, result)=>{
    if(err){
        console.log(err)
        return
    }
    console.log(result)
    console.log('completed first task')
    
})

console.log('starting next task') */

/* console.log('first')
setTimeout(()=>{
    console.log('second')
},0 )

console.log('third')
 */

const http = require('http')

const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.end('<h1>This is Home page</h1>')
    }
    if(req.url === '/about'){
        res.end('<h1>This is about page</h1>')
    }
   
    res.end('<h1>This is Error Not Found</h1>')
    
})

server.listen(5000, ()=>{
    console.log('Server listening on port:  5000 ....')
})