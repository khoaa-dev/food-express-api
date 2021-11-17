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
        return pool.request().query(`select * from Feedback where restaurantId = ${restaurantId}`);
    })
    .then(result => {
        res.send(result.recordset);
    })
    .catch(err => {
        res.send('error: ', err);
        
    })
}