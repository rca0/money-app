import axios from 'axios'

const BASE_URL = 'http://localhost:3000/v1/api/billingCycles'

export function getList() {
    const request = axios.get(`${BASE_URL}`)

    return {
        type: 'BILLING_CYCLES_FETCHED',
        payload: request
    }
}
