import sql from 'mssql';
import config from '../config.js';

export const getAllFeedBack = (req, res) => {
    sql.connect(config).then(pool => {
        return pool.request().query('select * from Feedback');
    })
    .then(result => {
        res.send(result.recordset);
    })
    .catch(err => {
        res.send('error: ', err);
    });
}


export const getFeedbackByRestaurantId = (req, res) => {
    const {restaurantId} = req.params;
    sql.connect(config).then(pool => {
        return pool.request().query(`select * from Feedback where restaurantId = ${restaurantId} order by createdTime desc` );
    })
    .then(result => {
        res.send(result.recordset);
    })
    .catch(err => {
        res.send('error: ', err);
        
    })
}

export const createFeedback = (req, res) => {
    const data = {
        customerId: req.body.customerId,
        detail: req.body.detail,
        createdTime: req.body.createdTime,
        rate: req.body.rate,
        restaurantId: req.body.restaurantId
    };
    sql.connect(config).then(pool => {
        return pool.request()
            .query(`insert into Feedback (customerId, rate, detail, createdTime, restaurantId)
                    values ('${data.customerId}', '${data.rate}', '${data.detail}', '${data.createdTime}', '${data.restaurantId}')`);
    }).then(result => {
        if(result.rowsAffected == 1) {
            res.send({
                "status": "Create successfully"
            });
        } else {
            res.send({
                "status": "Create failed"
            });
        }
        
    }).catch(err => {
        console.log(err);
    });
}