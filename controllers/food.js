import sql from 'mssql';
import config from '../config.js';

export const getAllFood = (req, res) => {
    sql.connect(config)
        .then(pool => {
            return pool.request().query(`SELECT * FROM Food`);
        })
        .then(result => {
            res.send(result.recordset);
        })
        .catch((err) => res.send("error: ", err));
}

export const getFoodByRestaurantId = (req, res) => {
    const {restaurantId} = req.params;
    sql.connect(config)
        .then(pool => {
            return pool.request()
                        .query(`SELECT * FROM Food WHERE restaurantId = ${restaurantId}`);
        })
        .then(result => {
            res.send(result.recordset);
        })
        .catch((err) => res.send("error: ", err));
}

export const getFoodByFoodId = (req, res) => {
    const {id} = req.params;
    sql.connect(config)
        .then(pool => {
            return pool.request()
                        .query(`SELECT * FROM Food WHERE id = ${id}`);
        })
        .then(result => {
            res.send(result.recordset);
        })
        .catch((err) => console.log(err));
}