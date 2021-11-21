'use strict'
const { EventEmitter } = require('events')

process.nextTick(console.log, 'passed!')

const ee = new EventEmitter()

ee.on('error', () => {})

/*process.on('uncaughtException', () => {
  console.log('passed!')
  process.exit(1)
})*/

ee.emit('error', Error('timeout'))

