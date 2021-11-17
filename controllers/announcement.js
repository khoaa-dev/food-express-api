import sql from 'mssql';
import config from '../config.js';

export const getAllAnnouncement = (req, res) => {
    sql.connect(config).then(pool => {
        return pool.request().query('select * from Announcement');
    })
    .then(result => {
        res.send(result.recordset);
    })
    .catch(err => {
        res.send('error: ', err);
    });
}


export const getAnnouncementByCustomerId = (req, res) => {
    const {customerId} = req.params;
    sql.connect(config).then(pool => {
        return pool.request().query(`select * from Announcement where customerId = ${customerId}`);
    })
    .then(result => {
        res.send(result.recordset);
    })
    .catch(err => {
        res.send('error: ', err);
        
    })
}