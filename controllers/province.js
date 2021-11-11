import sql from 'mssql';
import config from '../config.js';


export const getProvince = (req, res) => {
    sql.connect(config).then(pool => {
        return pool.request()
            .query('select * from Province')
    }).then(result => {
        res.send(result.recordsets);
        console.dir(result);
    }).catch(err => {
        console.log(err);
    });
}

export const getProvinceById = (req, res) => {
    const {id} = req.params;
    sql.connect(config).then(pool => {
        return pool.request()
            .input('id', sql.Int, id)
            .query('select * from Province where id = @id');
    }).then(result => {
        res.send(result.recordsets);
        console.dir(result);
    }).catch(err => {
        console.log(err);
    });
}