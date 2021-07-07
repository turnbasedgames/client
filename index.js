const {connectToParent} = require('penpal')

// event emitter is not defined in html5, figure how to expose this
const eventEmitter = new EventEmitter();

const connection = connectToParent({
  methods: {
    stateChanged(state) {
      eventEmitter.emit("stateChanged", state)
    },
  },
});

async function getStates(){
  const parent = await connection.promise
  return parent.getStates()
}

async function getLatestState(){
  const parent = await connection.promise
  return parent.getLatestState()
}

async function makeMove(move){
  const parent = await connection.promise
  return parent.makeMove(move)
}

module.exports = {getStates, getLatestState, makeMove, on: eventEmitter.on, off: eventEmitter.off}
