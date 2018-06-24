var server = require('./config/serverConfig.js');

server.listen(8080, () => {
    console.log("Server running");
});