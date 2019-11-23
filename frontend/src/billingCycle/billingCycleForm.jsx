import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import labelAndInput from '../common/form/labelAndInput'

class BillingCycleForm extends Component {
    render() {
        const { handleSubmit } = this.props

        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className='body'>
                    <Field name='name' component={labelAndInput} cols='12 4'
                        label='Name' placeholder='Type name'/>
                    <Field name='month' component={labelAndInput} cols='12 4'
                        type='number' label='Month' placeholder='Type month' />
                    <Field name='year' component={labelAndInput} cols='12 4'
                        type='number' label='Year' placeholder='Type year' />
                </div>
                <div className='box-footer'>
                    <button type='submit' className='btn btn-primary'>Submit</button>
                </div>
            </form>

        )
    }
}

export default reduxForm({form: 'billingCycleForm'})(BillingCycleForm)
