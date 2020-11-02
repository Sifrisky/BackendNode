const config = {
    dbUrl: process.env.DB_URL || '//mongodb://user:user1234@numerosdelhodst.mlab.com:numeros/nombredemiapp',
    port: process.env.PORT || 3000,
    host: process.env.HOST || 'http://localhost',
    publicRoute: process.env.PUBLIC_ROUTE || 'app',
    filesRoute: process.env.FILES_ROUTE || 'files',

};

module.exports = config;