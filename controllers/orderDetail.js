import sql from 'mssql';
import config from '../config.js';

export const getAllOrderDetail = (req, res) => {
    sql.connect(config).then(pool => {
        return pool.request().query('select * from OrderDetail');
    })
    .then(result => {
        res.send(result.recordset);
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
        res.send(result.recordset);
    })
    .catch(err => {
        res.send('error: ', err);
        
    })
}

export const createOrderDetail = (req, res) => {
    const data = {
        orderId: req.body.orderId,
        foodId: req.body.foodId,
        quantity: req.body.quantity,
        price: req.body.price
    };
    sql.connect(config).then(pool => {
        return pool.request()
            .query(`insert into OrderDetail (orderId, foodId, quantity, price)
                    values (${data.orderId}, ${data.foodId}, ${data.quantity}, ${data.price})`);
    }).then(result => {
        if(result.rowsAffected == 1) {
            res.send({
                "status": "Create successfully"
            })
        } else {
            res.send({
                "status": "Create failed"
            })
        }
        
    }).catch(err => {
        console.log(err);
    });
}