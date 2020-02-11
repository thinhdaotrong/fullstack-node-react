import React, { Component } from 'react'
import axios from 'axios'

const addProductAction = (product_info) =>
    (axios.post('/add',  product_info )
        .then((res) => res))



export default class AddProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product_name: '',
            product_price: '',
            image: ''
        }
    }

    isChange = event => {
        var name = event.target.name
        var value = event.target.value
        // console.log(name)
        // console.log(value)
        this.setState({
            [name]: value
        })
    }

    handleClick = () => {
        console.log(this.state)
        // var { product_name, product_price, image } = this.state
        addProductAction(this.state).then(response => {
            console.log(response.data)
        })
        // console.log(addProductAction(product_name, product_price, image))
    }

    render() {
        return (
            <div className="container mb-5">
                <div className="row">
                    <hr className="col-sm-12" />
                    <div className="col-sm-8 m-auto">
                        <form>
                            <div className="form-group">
                                <label htmlFor="product_name">Ten san pham</label>
                                <input onChange={event => this.isChange(event)} type="text" className="form-control" name="product_name" id="product_name" aria-describedby="helpId" />
                                <small id="helpId" className="form-text text-muted">nhap ten</small>
                            </div>
                            <div className="form-group">
                                <label htmlFor="product_price">Gia</label>
                                <input onChange={event => this.isChange(event)} type="text" className="form-control" name="product_price" id="product_price" aria-describedby="helpId" />
                                <small id="helpId" className="form-text text-muted">nhap gia</small>
                            </div>
                            <div className="form-group">
                                <label htmlFor="image" />
                                <input onChange={event => this.isChange(event)} type="text" className="form-control" name="image" id="image" aria-describedby="helpId" />
                                <small id="helpId" className="form-text text-muted">nhap link anh</small>
                            </div>
                            <button onClick={() => this.handleClick()} type="reset" className="btn btn-primary btn-block">Them moi</button>
                        </form>
                    </div>
                </div>
            </div>

        )
    }
}
