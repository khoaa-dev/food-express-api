import sql from 'mssql';
import config from '../config.js';

export const getAllCancellation = (req, res) => {
    sql.connect(config).then(pool => {
        return pool.request().query('select * from CancellationReason');
    })
    .then(result => {
        res.send(result.recordset);
    })
    .catch(err => {
        res.send('error: ', err);
    });
}

