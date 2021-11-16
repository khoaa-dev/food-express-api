import sql from 'mssql';
import config from '../config.js';

export const getAllOrderDetail = (req, res) => {
    sql.connect(config).then(pool => {
        return pool.request().query('select * from OrderDetail');
    })
    .then(result => {
        res.send(result.recordsets);
    })
    .catch(err => {
        res.send('error: ', err);
    });
}


export const getOrderDetailByOrderId = (req, res) => {
    const {orderId} = req.params;
    sql.connect(config).then(pool => {
        return pool.request().query(`select * from OrderDetail where orderId = ${orderId}`);
    })
    .then(result => {
        res.send(result.recordsets);
    })
    .catch(err => {
        res.send('error: ', err);
        
    })
}