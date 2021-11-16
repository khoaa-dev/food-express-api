import sql from 'mssql';
import config from '../config.js';

export const getAllCustomer = (req, res) => {
    sql.connect(config).then(pool => {
        return pool.request().query('select * from Customer');
    })
    .then(result => {
        res.send(result.recordsets);
    })
    .catch(err => {
        res.send('error: ', err);
    });
}


export const getCustomerById = (req, res) => {
    const {id} = req.params;
    sql.connect(config).then(pool => {
        return pool.request().query(`select * from Customer where id = ${id}`);
    })
    .then(result => {
        res.send(result.recordsets);
    })
    .catch(err => {
        res.send('error: ', err);
        
    })
}