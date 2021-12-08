import sql from 'mssql';
import config from '../config.js';

export const getAllFeedBackImage = (req, res) => {
    sql.connect(config).then(pool => {
        return pool.request().query('select * from FeedbackImage');
    })
    .then(result => {
        res.send(result.recordset);
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
        res.send(result.recordset);
    })
    .catch(err => {
        res.send('error: ', err);
        
    })
}

export const createFeedbackImage = (req, res) => {
    const data = {
        content: req.body.content,
        feedbackId: req.body.feedbackId
    };
    sql.connect(config).then(pool => {
        return pool.request()
            .query(`insert into FeedbackImage (content, feedbackId)
                    values ('${data.content}', '${data.feedbackId}')`);
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