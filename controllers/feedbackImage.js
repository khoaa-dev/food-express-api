import sql from 'mssql';
import config from '../config.js';

export const getAllFeedBackImage = (req, res) => {
    sql.connect(config).then(pool => {
        return pool.request().query('select * from FeedbackImage');
    })
    .then(result => {
        res.send(result.recordsets);
    })
    .catch(err => {
        res.send('error: ', err);
    });
}


export const getFeedbackImageByFeedbackId = (req, res) => {
    const {feedbackId} = req.params;
    sql.connect(config).then(pool => {
        return pool.request().query(`select * from FeedbackImage where feedbackId = ${feedbackId}`);
    })
    .then(result => {
        res.send(result.recordsets);
    })
    .catch(err => {
        res.send('error: ', err);
        
    })
}