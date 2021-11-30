import sql from 'mssql';
import config from '../config.js';


export const getProvince = (req, res) => {
    sql.connect(config).then(pool => {
        return pool.request()
            .query('select * from Province')
    }).then(result => {
        res.send(result.recordset);
    }).catch(err => {
        res.send("Error: ", err);
    });
}

export const getProvinceById = (req, res) => {
    const {id} = req.params;
    sql.connect(config).then(pool => {
        return pool.request()
            .input('id', sql.Int, id)
            .query('select * from Province where id = @id')
    }).then(result => {
        res.send(result.recordset);
    }).catch(err => {
        res.send("Error: ", err);
    });
}

export const createProvince = (req, res) => {
    const data = req.body;
    sql.connect(config).then(pool => {
        return pool.request()
            .query('select * from Province');
    }).then(result => {
        res.send(result.recordset);
    }).catch(err => {
        console.log(err);
    });
}

export const getProvinceByPageNumber = (req, res) => {
    const {page} = req.params;
    console.log(page);
    const startIndex = (page - 1) * 3;
    const endIndex = page * 3;
    sql.connect(config).then(pool => {
        return pool.request()
            .query('select * from Province');
    }).then(result => {
        result = result.recordset.slice(startIndex, endIndex);
        res.send(result);
    }).catch(err => {
        console.log(err);
    });
}