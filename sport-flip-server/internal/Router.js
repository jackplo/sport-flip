const express = require('express')

function getRouter( repository ) {
    const router = express.Router()

    /**
      * @api {get} api/AllCrashLocations       Get all trips based on a given state
      * @apiName AllCrashLocations
      * @apiParam none                                     
      * @apiSuccess {data}                        relevant info about crashes returned 
    */
    router.get("/AllCrashLocations", async function (req, res, next) {
        console.log("Getting All Crash Locations...")
        try {
            const data = await repository.getAllCrashLocations()
            res.json(data)
        } catch (err) {
            const errMessage = "Error while retrieving crash info: " + req.params.state + err.message
            res.status(404)
            res.send(errMessage)
            next(err);
        }
    })

    return router;
}

module.exports = { getRouter }