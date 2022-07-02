const Pool = require('pg').Pool

const pool = new Pool({
    user: 'lgtoxrdyuqjvex',
    password: '8bd500bdad9ed927f02b0793e3eff668bd4d8eb0e22ca3183c2c4e5e495f8fe4',
    host:'ec2-34-242-84-130.eu-west-1.compute.amazonaws.com',
    port: 5432,
    database: 'dc3p09q6mj97tp',
    ssl: {rejectUnauthorized: false}
})

module.exports = pool
