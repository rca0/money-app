import React, { Component } from 'react'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import contentHeader from '../common/template/contentHeader'

class BillingCycle extends Component {
    render() {
        return (
            <div>
                <contentHeader title='Payment Cycles' small='Register' />
                <Content>
                    Payment Cycles
                </Content>
            </div>
        )
    }
}

export default BillingCycle
