const { AirportService } = require('../services/index');

const airportService = new AirportService();

const create = async(req, res) => {
    try {
         const response = await airportService.create(req.body);
         return res.status(201).json({
            data : response,
            error : {},
            message : "Successfully created a new airport",
            success : true
         });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            error : error,
            message : "Not able to create the new airport",
            success : false
        });
    }
}

module.exports  = {
    create
}