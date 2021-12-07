import sql from 'mssql';
import config from '../config.js';

export const getAllAnnouncement = (req, res) => {
    sql.connect(config).then(pool => {
        return pool.request().query(`select * from Announcement order by createdTime desc`);
    })
    .then(result => {
        res.send(result.recordset);
    })
    .catch(err => {
        res.send('error: ', err);
    });
}

export const createAnnouncement = (req, res) => {
    const data = {
        title: req.body.title,
        content: req.body.content,
        createdTime: req.body.createdTime,
        imageUrl: req.body.imageUrl
    };
    sql.connect(config).then(pool => {
        return pool.request()
            .query(`set dateformat dmy
                    insert into Announcement (title, content, createdTime, imageUrl)
                    values ('${data.title}', '${data.content}', '${data.createdTime}', '${data.imageUrl}')`);
        
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

