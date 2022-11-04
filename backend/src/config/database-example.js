async function connect() {
    if (global.connection && global.connection.state !== 'disconnected')
    return global.connection;
    
    const mysql = require('mysql2/promise');
    const connection = await mysql.createConnection({
        host: 'DATABASE_HOST',
        port: 3306,
        user: 'DATABASE_USER',
        password: 'USER_PASS',
        database: 'DATABASE_NAME',
    });

    console.log("Conectou no database!");    
    global.connection = connection;
    return connection;
}

exports.getConnection = () => connect();