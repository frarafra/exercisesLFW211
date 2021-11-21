'use strict'
const { promisify } = require('util')

const print = (err, contents) => { 
  if (err) console.error(err)
  else console.log(contents) 
}

const opA = (cb) => {
  setTimeout(() => {
    cb(null, 'A')
  }, 500)
}

const opB = (cb) => {
  setTimeout(() => {
    cb(null, 'B')
  }, 250)
}

const opC = (cb) => {
  setTimeout(() => {
    cb(null, 'C')
  }, 125)
}

const opAProm = promisify(opA)
const opBProm = promisify(opB)
const opCProm = promisify(opC)

/*async function main() {
  const resA = await opAProm();
  print(resA);
  const resB = await opBProm();
  print(resB);
  const resC = await opCProm();
  print(resC);
}

main();*/

opAProm()
  .then((resultA) => {
    print(resultA);
    return opBProm();
  }).then((resultB) => {
    print(resultB);
    return opCProm();
  })
  .then((resultC) => {
    print(resultC);
  });