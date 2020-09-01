const express = require('express')
const router = express.Router()
const con = require('../db/connection');

router.get('/api/products', async (req, res) => {
    
    
    try {
        con.query('SELECT * FROM t_products', function (error, rows, fields) {
            if (error) {
                console.log(error)
            } else {
                var customResponse = {
                    status: "1000",
                    message: "success mendapatkan data",
                    data: rows
                  };
                
                res.json(customResponse)
            }
        });
    } catch (error) {
        res.status(error.statusCode).send({ error: `${error.message}` })
    }
})



module.exports = router