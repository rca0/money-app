import React, { Component } from 'react'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'

class Dashboard extends Component {
    render() {
        return (
            <div>
                <ContentHeader title='Dashboard' small='v1.0' />
                <Content>
                    Dashboard content
                </Content>
            </div>
        )
    }
}

export default Dashboard
