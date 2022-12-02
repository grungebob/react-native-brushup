import { FileStore, AutoCleanFileStore, HttpStore } from 'metro-cache';

module.exports = {
    resolver : {},
    transformer: {},
    serializer: {},
    server: {},
    cacheStores: [
        new AutoCleanFileStore({
            root: './auto',
            intervalMs: 1000,
            cleanupThresholdMs: 30
        }),
        new FileStore({
            root: './cache'
        }),
        new HttpStore({
            endpoint: 'http://localhost:8888/cache/path',
            family: 4, //6
            timeout: 1000
        }),
    ]
}