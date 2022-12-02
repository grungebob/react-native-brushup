import Metro from 'metro';

Metro.loadConfig()
    .then(config => {
        Metro.runBuild(config, {
            entry: './src/app.js',
            out: './dist/app.js',
        });
    });