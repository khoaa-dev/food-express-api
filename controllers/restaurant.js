import sql from 'mssql';
import config from '../config.js';


export const getAllResTaurant = (req, res) => {
    sql.connect(config)
        .then(pool => {
            let restaurants = pool.request().query('select * from Restaurant');
            
            return restaurants;
        })
        .then(result => {
            res.send(result.recordset);
        })
        .catch((err) => res.send("error: ", err));
}


export const getRestaurantByName = (req, res) => {
    const {name} = req.params;
    sql.connect(config)
        .then(pool => {
            return pool.request()
                    .query(`select * from Restaurant where nameRes like N'${name}'`);
        })
        .then(result => {
            res.send(result.recordset);
        })
        .catch(err => {
            res.send("error: ", err);
        })
}

export const getRestaurantById1 = (req, res) => {
    const {restaurantId} = req.params;
    sql.connect(config)
        .then(pool => {
            return pool.request()
                    .input('restaurantId', sql.Int, restaurantId)
                    .query(`select * from Restaurant where id = @restaurantId`);
        })
        .then(result => {
            res.send(result.recordset);
        })
        .catch(err => {
            res.send("error: ", err);
        })
}

