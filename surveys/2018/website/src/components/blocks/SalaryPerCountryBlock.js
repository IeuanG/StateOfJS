import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BlockTitle from '../elements/BlockTitle'
import SalaryPerCountryMapChart from '../charts/SalaryPerCountryMapChart'
import ChartContainer from '../elements/ChartContainer'

export default class SalaryPerCountryBlock extends Component {
    static propTypes = {
        data: PropTypes.arrayOf(
            PropTypes.shape({
                country: PropTypes.string.isRequired,
                salary: PropTypes.shape({
                    average: PropTypes.number.isRequired
                }).isRequired
            })
        ).isRequired,
        chartId: PropTypes.string.isRequired
    }

    render() {
        return (
            <div className="block" id={this.props.chartId}>
                <BlockTitle chartId={this.props.chartId} />
                <ChartContainer>
                    <SalaryPerCountryMapChart data={this.props.data} />
                </ChartContainer>
            </div>
        )
    }
}
