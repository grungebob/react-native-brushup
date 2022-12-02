import Metro from 'metro';
import express from 'express';
import { Server } from 'http';
const app = express();
const server = Server(app);

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