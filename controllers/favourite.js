import sql from 'mssql';
import config from '../config.js';

export const getAllFavourite = (req, res) => {
    sql.connect(config).then(pool => {
        return pool.request().query('select * from Favourite');
    })
    .then(result => {
        res.send(result.recordset);
    })
    .catch(err => {
        res.send('error: ', err);
    })
}

export const getFavouriteByCustomerId = (req, res) => {
    const customerId = req.params.customerId;
    sql.connect(config).then(pool => {
        return pool.request().query(`select Favourite.customerId, Favourite.restaurantId, nameRes, background
                                    from Favourite, Restaurant
                                    where Favourite.restaurantId = Restaurant.id and	
                                    Favourite.customerId = ${customerId}`);
    })
    .then(result => {
        res.send(result.recordset);
    })
    .catch(err => {
        res.send('error: ', err);
    })
}

