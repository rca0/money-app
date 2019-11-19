const BillingCycle = require('./billingCycle')

BillingCycle.methods(['get', 'post', 'put', 'delete'])
// if not pass updateOptions function, does not return object updated
// execute validators when execute updates
BillingCycle.updateOptions({ new: true, runValidators: true })

module.exports = BillingCycle
