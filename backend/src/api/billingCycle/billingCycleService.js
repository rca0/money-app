const BillingCycle = require('./billingCycle')

BillingCycle.methods(['get', 'post', 'put', 'delete'])
// if not pass updateOptions function, does not return object updated
// execute validators when execute updates
BillingCycle.updateOptions({ new: true, runValidators: true })

BillingCycle.route('count', (req, res, next) => {
    // mongoose method already exist
    BillingCycle.count((error, value) => {
        if(error) {
            res.status(500).json({ errors: [error] })
        } else {
            // return the count of elements
            res.json({ value })
        }
    })
})

module.exports = BillingCycle
