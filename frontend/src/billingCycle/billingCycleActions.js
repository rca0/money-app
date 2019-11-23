import axios from 'axios'
import { toastr } from 'react-redux-toastr'

const BASE_URL = 'http://localhost:3000/v1/api/billingCycles'

export function getList() {
    const request = axios.get(`${BASE_URL}`)

    return {
        type: 'BILLING_CYCLES_FETCHED',
        payload: request
    }
}

export function create(values) {
    axios.post(`${BASE_URL}`, values)
        .then(resp => {
            toastr.success('Added successfully')
        })
        .catch(e => {
            e.response.data.errors.forEach(error => toastr.error('Error', error))
        })

    return {
        type: 'BILLING_CYCLE_CREATED',
    }
}
