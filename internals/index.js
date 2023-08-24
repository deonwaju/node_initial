const request = require('./request');

module.exports = {
    send: request.send,
    response: require('./response')
};