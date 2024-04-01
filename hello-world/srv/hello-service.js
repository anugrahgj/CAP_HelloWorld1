// module.exports = class say {
//   hello(req) {
//     let {to} = req.data
//     if (to === 'me') to = require('os').userInfo().username
//     return `Hello ${to}!`
//   }
// }

const cds = require('@sap/cds');

class HelloService extends cds.ApplicationService {
    sayHello(name) {
        return "Hello " + name;
    }
}

module.exports = HelloService;