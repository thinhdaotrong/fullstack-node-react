import React, { Component } from 'react'
import HeadTitle from './components/HeadTitle'
import Product from './components/Product'
import axios from 'axios'
// const axios = require('axios');

const getProductData = () => (axios.get('/getdata01').then(res => res))
const addProductAction = (product_name, product_price, image) => (axios.post('/add', { product_name, product_price, image }).then(res => res))


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      product_name: '',
      product_price: '',
      image: ''
    }
  }
  componentWillMount() {
    if (this.state.data === null) {
      // console.log(getProductData())
      getProductData().then(response => {
        this.setState({
          data: response.data
        })
      })
    }
  }
  printData = () => {
    if (this.state.data !== null) {
      return this.state.data.map((value, key) => {
        return (
          <Product
            key={key}
            product_name={value.product_name}
            product_price={value.product_price}
            image={value.image}
          />
        )
      })
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
    // console.log(this.state)
    var { product_name, product_price, image } = this.state
    var item = {}
    item.product_name = product_name
    item.product_price = product_price
    item.image = image
    var dataTemp = this.state.data
    if (item.product_name !== '') {
      dataTemp.push(item)
    }
    this.setState({
      data: dataTemp
    })
    addProductAction(product_name, product_price, image).then(response => {
      console.log(response.data)
    })
  }
  render() {
    // console.log(this.state.data)
    return (
      <div>
        <HeadTitle />
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-8">
              <div className="row">
                {this.printData()}
              </div>
            </div>
            <div className="col-sm-4">
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
      </div>
    )
  }
}
