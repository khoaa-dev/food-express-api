import sql from 'mssql';
import config from '../config.js';

export const getAllFavourite = (req, res) => {
    sql.connect(config).then(pool => {
        return pool.request().query('select * from Favourite');
    })
    .then(result => {
        res.send(result.recordsets);
    })
    .catch(err => {
        res.send('error: ', err);
    })
}

export const getFavouriteByCustomerId = (req, res) => {
    const customerId = req.params;
    sql.connect(config).then(pool => {
        return pool.request().query(`select * from Favourite where customerId = ${customerId}`);
    })
    .then(result => {
        res.send(result.recordsets);
    })
    .catch(err => {
        res.send('error: ', err);
    })
}