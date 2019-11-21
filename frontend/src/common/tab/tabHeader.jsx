import React, { Component } from 'react'

class TabHeader extends Component {
    render() {
        return (
            <li>
                <a href='javascript:;' // ignore link access
                    data-toggle='tab'
                    data-target={this.props.target}>
                    <i className={`fa fa-${this.props.icon}`}></i> {this.props.label}
                    </a>
            </li>
        )
    }
}

export default TabHeader
