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

export const getRestaurantById = (req, res) => {
    const {id} = req.params;
    console.log(id);
    sql.connect(config)
        .then(pool => {
            return pool.request()
                    .query(`select * from Restaurant where id = ${id}`);
        })
        .then(result => {
            res.send(result.recordset);
        })
        .catch(err => {
            res.send("error: ", err);
        })
}

export const getRestaurantByPageNumber = (req, res) => {
    const {page} = req.params;
    const startIndex = (page - 1) * 8;
    const endIndex = page * 8;
    sql.connect(config)
        .then(pool => {
            return pool.request()
                    .query(`select * from Restaurant`);
        })
        .then(result => {
            result = result.recordset.slice(startIndex, endIndex);
            res.send(result);
        })
        .catch(err => {
            console.log(err);
        })
}

export const getRestaurantByMenuId = (req, res) => {
    const {menuId} = req.params;
    sql.connect(config)
        .then(pool => {
            return pool.request()
                    .query(`select * from Restaurant where menuCategoryId = ${menuId}`);
        })
        .then(result => {
            res.send(result.recordset);
        })
        .catch(err => {
            console.log(err);
        })
}

export const searchRestaurantByName = (req, res) => {
    const {name} = req.params;
    sql.connect(config)
        .then(pool => {
            return pool.request()
                    .query(`select * from Restaurant where nameRes like N'%${name}%'`);
        })
        .then(result => {
            res.send(result.recordset);
        })
        .catch(err => {
            console.log(err);
        })
}

