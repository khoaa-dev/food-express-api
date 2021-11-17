import sql from 'mssql';
import config from '../config.js';

export const getAllDiscount = (req, res) => {
    sql.connect(config).then(pool => {
        return pool.request().query('select * from Discount');
    })
    .then(result => {
        res.send(result.recordsets);
    })
    .catch(err => {
        res.send('error: ', err);
    });
}


export const getDiscountByCustomerId = (req, res) => {
    const {customerId} = req.params;
    sql.connect(config).then(pool => {
        return pool.request().query(`select * from Discount as d, CustomerDiscount as cd
                                    where d.id = cd.discountId and 
                                    cd.customerId = ${customerId}`);
    })
    .then(result => {
        res.send(result.recordset);
    })
    .catch(err => {
        res.send('error: ', err);
        
    })
}

export const getDiscountByRestaurantId = (req, res) => {
    const {restaurantId} = req.params;
    sql.connect(config).then(pool => {
        return pool.request().query(`select * from Discount as d, RestaurantDiscount as rd
                                    where d.id = rd.discountId and 
                                    rd.restaurantId = ${restaurantId}`);
    })
    .then(result => {
        res.send(result.recordset);
    })
    .catch(err => {
        res.send('error: ', err);
        
    })
}