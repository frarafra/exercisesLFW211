'use strict'

const { Readable, Writable, pipeline } = require('stream')
const { promisify } = require('util')
const assert = require('assert')

const createWritable = () => {
  const sink = []
  let piped = false

  setImmediate(() => {
    assert.strictEqual(piped, true, 'use the pipe method')
    assert.deepStrictEqual(sink, ['a', 'b', 'c'])
  })

  const writable = new Writable({
    decodeStrings: false,
    write(chunk, enc, cb) {
      sink.push(chunk)
      cb()
    },
    final() {
      console.log('passed!')
    }
  })

  writable.once('pipe', () => {
    piped = true
  })

  return writable
}

const readable = Readable.from(['a', 'b', 'c'])
const writable = createWritable()
const pipelineProm = promisify(pipeline)

// TODO - send all data from readable to writable:
async function run() {
  await pipelineProm(
    readable,
    writable
  );
}

run().catch(console.error);
