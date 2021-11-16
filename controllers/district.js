import sql from 'mssql';
import config from '../config.js';


export const getAllDistrict = (req, res) => {
    sql.connect(config).then(pool => {
        return pool.request()
            .query('select * from District')
    }).then(result => {
        res.send(result.recordsets);
    }).catch(err => {
        res.send("Error: ", err);
    });
}

export const getDistrictById = (req, res) => {
    const {id} = req.params;
    sql.connect(config).then(pool => {
        return pool.request()
            .input('id', sql.Int, id)
            .query('select * from District where id = @id')
    }).then(result => {
        res.send(result.recordsets);
    }).catch(err => {
        res.send("Error: ", err);
    });
}