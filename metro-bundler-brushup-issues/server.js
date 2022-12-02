import Metro from 'metro';
import express from 'express';
import http from 'http';
const app = express();
const server = http.Server(app);

Metro.loadConfig() 
    .then(config => {
        Metro.createConnectMiddleware(config)
            .then(response => {
                const {server: { port }} = config;
                app.use('/', express.static('public'));
                app.use(response.middleware);

                server.listen(port);
            })
        // Metro.runServer(config, {});
    })