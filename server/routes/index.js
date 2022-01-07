const express = require('express');
const router = express.Router();
const { State } = require('../models');
const sequelize = require('../util/SequelizeManager');

// TODO: Create a GET '/states' route that returns data from your State model
// Note: The functions to retrieve data from the database using sequelize is asyncronous, so it will look something like this:
// var people = await Person.doSomething();
router.get('/states', async (req, res) => { // GET route
    var states = await State.findAll({
        attributes: {
            include: [
                // modify 'percent' column to show as percentage rounded to 2 decimal places
                [sequelize.literal('CONCAT(ROUND(percent * 100,2),"%")'), 'percent'] 
            ]
        }
        
    }); // obtain all data from State model
    res.send(states); // send all data
});

module.exports = router;
