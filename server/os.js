const os = require('os')
const path = require('path')
// const fs = require('fs')
const {readFileSync, writeFileSync, readFile} = require('fs')

// console.log(fs.readFileSync)

const profile = require('./module/1-module')
const show = require('./module/2-function')

//info about current user
// const user = os.userInfo()
// console.log(user)

//method returns the system uptime in seconds
// console.log(`The System Uptime is ${os.uptime()} seconds`)

// const currentOs = {
//     name: os.type(),
//     release: os.release(),
//     totalMen: os.totalmem(),
//     freeMen: os.freemem()
// }

// console.log(currentOs)

//path
// console.log(path.sep)
// const filePath = path.join('/content/', 'subfolder', 'test.txt')
// const base = path.basename(filePath)
// const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
// console.log(absolute)

/*  */
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

// writeFileSync('./content/result-sync.txt', 
//     `Here is the result: ${first}, ${second}`,
//     {flag: 'a'}
// )
// console.log(readFileSync('./content/result-sync.txt', 'utf8'))

readFile('./content/first.txt', /*'utf-8'*/'',(err, result)=>{
        if(err){
            console.log(err)
            return
        }
        console.log(result)
})