const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('response', (cb1, cb2) => {
    console.log('logic 1', cb1 , cb2)
   
})
customEmitter.on('response', (cb1, cb2) => {
    console.log('logic 2', cb1 , cb2)
  
})
customEmitter.emit('response', 'paul', 30)