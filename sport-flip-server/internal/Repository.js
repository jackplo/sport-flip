
class Repository {
    constructor(database) {
        this._database = database
    }
 
    async getAllCrashLocations() {
        const sql = 'SELECT report_number, longitude, latitude FROM `CRASH_EVENT`;'
        const params = []
        return(this._database.query(sql, params)
            .then((response) => {
                return response[0]
            })
        )
    }

    
}

module.exports = {
    Repository
}