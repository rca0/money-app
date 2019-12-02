import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm, Field } from 'redux-form'

import { init } from '../billingCycle/billingCycleActions'
import labelAndInput from '../common/form/labelAndInput'
import CreditList from './creditList'

class BillingCycleForm extends Component {
    render() {
        const { handleSubmit, readOnly } = this.props

        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className='body'>
                    <Field name='name' component={labelAndInput} cols='12 4' readOnly={readOnly}
                        label='Name' placeholder='Type name'/>
                    <Field name='month' component={labelAndInput} cols='12 4' readOnly={readOnly}
                        type='number' label='Month' placeholder='Type month' />
                    <Field name='year' component={labelAndInput} cols='12 4' readOnly={readOnly}
                        type='number' label='Year' placeholder='Type year' />
                    <CreditList cols='12 6' readOnly={readOnly} />
                </div>
                <div className='box-footer'>
                    <button type='submit' className={`btn btn-${this.props.submitClass}`}>{this.props.submitLabel}</button>
                    <button type='button' className='btn btn-default'
                        onClick={this.props.init}>Cancel</button>
                </div>
            </form>

        )
    }
}

BillingCycleForm = reduxForm({form: 'billingCycleForm', destroyOnUnmount: false})(BillingCycleForm)
const mapDispatchToProps = dispatch => bindActionCreators({init}, dispatch)
export default connect(null, mapDispatchToProps)(BillingCycleForm)
