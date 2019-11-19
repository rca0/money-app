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

// get all values from credits and debits
BillingCycle.route('summary', (req, res, next) => {
    BillingCycle.aggregate([{
        $project: {credit: {$sum: "$credits.value"}, debt: {$sum: "$debts.value"}}
    }, {
        $group: {_id: null, credit: {$sum: "$credit"}, debt: {$sum: "$debt"}}
    }, {
        $project: {_id: 0, credit: 1, debt: 1}
    }], (error, result) => {
        if(error) {
            res.status(500).json({ errors: [error] })
        } else {
            res.json(result[0] || {credit: 0, debt: 0})
        }
    })
})

module.exports = BillingCycle
