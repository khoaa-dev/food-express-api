import sql from 'mssql';
import config from '../config.js';

export const getAllOrder = (req, res) => {
    sql.connect(config).then(pool => {
        return pool.request().query('select * from Orders');
    })
    .then(result => {
        res.send(result.recordset);
    })
    .catch(err => {
        res.send('error: ', err);
    });
}


export const getOrderByCustomerId = (req, res) => {
    const {customerId} = req.params;
    sql.connect(config).then(pool => {
        return pool.request().query(`select * from Orders where customerId = ${customerId}`);
    })
    .then(result => {
        res.send(result.recordset);
    })
    .catch(err => {
        res.send('error: ', err);
        
    })
}