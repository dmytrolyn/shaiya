require('dotenv').config();

const sql = require('mssql');
const defaultTitles = require('../utils/defaultTitles');

const config = {
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    server: 'DESKTOP-HCFSA03',
    options: {
        enableArithAbort: true
    },
    connectionTimeout: 500000,
    requestTimeout: 20000,
    pool: {
        idleTimeoutMillis: 300000,
        max: 100
    }
}

const poolPromise = sql.connect(config);

const transformDataType = (type) => {
    switch(type) {
        case "string": return sql.VarChar;
        default: return sql.Int;
    }
}

const runQuery = (query) => poolPromise.then(() => sql.query(query));

const runPreparedQuery = async (query, args) => {
    let pool = await poolPromise;
    let prepQuery = new sql.PreparedStatement(pool);
    Object.keys(args).forEach(arg => {
        prepQuery.input(arg, transformDataType(typeof args[arg]));
    })
    await prepQuery.prepare(query);
    let result = await prepQuery.execute({ ...args });
    await prepQuery.unprepare();

    return result;
}

const fetchQuery = (query, defaultKey) => async (req, res) => {
    try {
        let resp = await runQuery(query);
        if(defaultKey) res.status(200).json({ titles: defaultTitles[defaultKey], data: resp.recordset });
        else res.status(200).json(resp.recordset);
    } catch(err) {
        console.log(err)
        res.sendStatus(500)
    }
}

// const fetchPreparedQuery = (query, params) => async (req, res) => {
//     try {
//         let resp = db.runPreparedQuery(query, params);
//         res.status(200).json(resp.recordset);
//     } catch(err) {
//         res.sendStatus(500)
//     }
// }

// const fetchPreparedQueryArray = (query, params) => async(req, res) => {
//     try {
//         let resp = await Promise.all(params.map(param => db.runPreparedQuery(query, param)));
//         res.status(200).json(resp.map(row => row.recordset[0]));
//     } catch(err) {
//         console.log(err)
//         res.sendStatus(500);
//     }
// }

process.on("beforeExit", () => {
    poolPromise.then(() => sql.close());
})

module.exports = {
    runQuery,
    runPreparedQuery,
    fetchQuery
}