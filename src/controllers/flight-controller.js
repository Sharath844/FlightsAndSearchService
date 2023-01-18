const {FlightService} = require('../services/index');

const flightService = new FlightService();

const create = async(req, res) => {
    try {
        const flight = await flightService.createFlight(req.body);
        return res.status(201).json({
            data : flight,
            success : true,
            err : {},
            message : 'Successfully created a flight'
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            success : false,
            err : error,
            message : 'Not able to create a flight'
        });
    }
}

const getAll = async(req, res) => {
    try {
        const flights = await flightService.getAllFlightData(req.query);
        return res.status(201).json({
              data : flights,
              success : true,
              err : {},
              message : 'Successfully fetched the flights'
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            success : false,
            err : error,
            message : 'Not able to fetch the  flights'
        });
    }
}
module.exports = {
    create,
    getAll
}