import React, { Component } from 'react'

export default class Product extends Component {
    render() {
        return (
            <div className="col-sm-3">
                <div className="card text-left">
                    <img className="card-img-top" src={this.props.image} alt="" />
                    <div className="card-body">
                        <p className="float-left">{this.props.product_name}</p>
                        <p className="float-right">{this.props.product_price}</p>
                    </div>
                </div>
            </div>

        )
    }
}
