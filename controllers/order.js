import sql from 'mssql';
import config from '../config.js';

export const getAllOrder = (req, res) => {
    sql.connect(config).then(pool => {
        return pool.request().query('select * from Orders order by createdTime desc');
    })
    .then(result => {
        res.send(result.recordset);
    })
    .catch(err => {
        console.log(err);
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


export const createOrder = (req, res) => {
    const data = {
        createdTime: req.body.createdTime,
        note: req.body.note,
        deliveryCost: req.body.deliveryCost,
        deliveryTime: req.body.deliveryTime,
        paymentTime: req.body.paymentTime,
        customerId: req.body.customerId,
        paymentId: req.body.paymentId,
        orderStatus: req.body.orderStatus,
        discountId: req.body.discountId,
        reasonId: req.body.reasonId
    };
    sql.connect(config).then(pool => {
        return pool.request()
            .query(`set dateformat dmy
                    insert into Orders (createdTime, note, deliveryCost, deliveryTime, paymentTime, customerId, paymentId, orderStatus, discountId, reasonId)
                    values ('${data.createdTime}', '${data.note}', '${data.deliveryCost}', '${data.deliveryTime}', '${data.paymentTime}', '${data.customerId}', '${data.paymentId}'
                            , '${data.orderStatus}', '${data.discountId}', '${data.reasonId}')`);
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

