import pkg from "pg";
const { Pool } = pkg;

const db = new Pool({
    user:'postgres',
    host:'localhost',
    database:'quiroprata',
    password:'02012001#Eduardo'
})

export default db;