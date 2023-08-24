// const {send} = require('./internals/request')
// const read = require('./internals/response')
const internals = require('./internals')


function makeRequest(url, data){
   internals.send(url, data);
   return internals.response.read(); 
}

const responseData = makeRequest('https//google.com', 'hello')
console.log(responseData)