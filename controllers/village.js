import sql from 'mssql';
import config from '../config.js';


export const getAllVillage = (req, res) => {
    sql.connect(config).then(pool => {
        return pool.request()
            .query('select * from Village')
    }).then(result => {
        res.send(result.recordsets);
    }).catch(err => {
        res.send("Error: ", err);
    });
}

export const getVillageById = (req, res) => {
    const {id} = req.params;
    sql.connect(config).then(pool => {
        return pool.request()
            .input('id', sql.Int, id)
            .query('select * from Village where id = @id')
    }).then(result => {
        res.send(result.recordsets);
    }).catch(err => {
        res.send("Error: ", err);
    });
}