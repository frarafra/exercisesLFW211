'use strict'

const { spawn } = require('child_process')
const { stdout } = require('process')

function exercise (command, args) {
  const sp = spawn(command, args)
  sp.stdout.pipe(stdout)
  sp.stderr.pipe(stdout)  
  sp.stdin.end()
}

module.exports = exercise