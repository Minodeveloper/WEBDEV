let server  = require('./server');
let router  = require('./router');


server.starts(router.route);