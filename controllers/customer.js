import sql from 'mssql';
import config from '../config.js';

export const getAllCustomer = (req, res) => {
    sql.connect(config).then(pool => {
        return pool.request().query('select * from Customer');
    })
    .then(result => {
        res.send(result.recordset);
    })
    .catch(err => {
        res.send('error: ', err);
    });
}


export const getCustomerById = (req, res) => {
    const {id} = req.params;
    sql.connect(config).then(pool => {
        return pool.request().query(`select * from Customer where id = ${id}`);
    })
    .then(result => {
        res.send(result.recordset);
    })
    .catch(err => {
        res.send('error: ', err);
        
    })
}

export const createCustomer = (req, res) => {
    const data = {
        fullName: req.body.fullName,
        phone: req.body.phone,
        pass: req.body.pass
    };
    sql.connect(config).then(pool => {
        return pool.request()
            .query(`insert into Customer (fullName, phone, pass)
                    values ('${data.fullName}', '${data.phone}', '${data.pass}')`);
        
    }).then(result => {
        if(result.rowsAffected == 1) {
            res.send("Create successfully");
        }
        
    }).catch(err => {
        console.log(err);
    });
}

export const updateCustomer = (req, res) => {
    const {id} = req.params;
    const data = {
        fullName: req.body.fullName,
        phone: req.body.phone,
        gender: req.body.gender,
        pass: req.body.pass,
        email: req.body.email,
        avatar: req.body.avatar,
        dob: req.body.dob,
        street: req.body.street,
        number: req.body.number
    };
    sql.connect(config).then(pool => {
        return pool.request()
            .query(`update Customer set fullName = N'${data.fullName}',
                                        phone = '${data.phone}',
                                        gender = '${data.gender}',
                                        pass = '${data.pass}',
                                        email = '${data.email}',
                                        avatar = '${data.avatar}',
                                        dob = '${data.dob}',
                                        street = '${data.street}',
                                        number = '${data.number}'
                    where id = ${id}`);        
    }).then(result => {
        if(result.rowsAffected == 1) {
            res.send("Update successfully");
        }
        
    }).catch(err => {
        console.log(err);
    });
}