const express = require('express')

module.exports = function(server) {
    // define base URL
    const router = express.Router()
    server.use('/v1/api', router)

    // get model reference and create routes
    const BillingCycle = require('../api/billingCycle/billingCycleService')
    BillingCycle.register(router, '/billingCycles')
}
