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

export const createFavourite = (req, res) => {
    const data = {
        customerId: req.body.customerId,
        restaurantId: req.body.restaurantId
    };
    sql.connect(config).then(pool => {
        return pool.request()
            .query(`insert into Favourite (customerId, restaurantId)
                    values ('${data.customerId}', '${data.restaurantId}')`);
        
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

export const deleteFavourite = (req, res) => {
    const data = {
        customerId: req.body.customerId,
        restaurantId: req.body.restaurantId
    };
    sql.connect(config).then(pool => {
        return pool.request()
            .query(`delete from Favourite where customerId = '${data.customerId}' and restaurantId = '${data.restaurantId}'`);
    }).then(result => {
        if(result.rowsAffected == 1) {
            res.send({
                "status": "Delete successfully"
            });
        } else {
            res.send({
                "status": "Delete failed"
            });
        }
        
    }).catch(err => {
        console.log(err);
    });
}

