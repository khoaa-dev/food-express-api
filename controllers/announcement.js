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
        return pool.request().query(`select Announcement.id, nameAnnoun, imageUrl, detail, createdTime, checked, Announcement.typeId, customerId
                                    from Announcement, AnnouncementType 
                                    where Announcement.typeId = AnnouncementType.id and
                                    customerId = ${customerId}`);
    })
    .then(result => {
        res.send(result.recordset);
    })
    .catch(err => {
        console.log(err);
        
    })
}