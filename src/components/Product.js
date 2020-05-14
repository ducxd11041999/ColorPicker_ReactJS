import React, { Component } from 'react';

class Product extends Component {

/*Cach 1*/
    onBuy()
    {
            alert(this.props.children + " " + this.props.price);
    }
    constructor(props)
    {
            super(props);
            this.onBuy = this.onBuy.bind(this);
    }
  /*Cach 2*/
    onBuy2 = () =>
    {
        alert(this.props.children + " " + this.props.price);
    }
  render(){
    return (
      <div>
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
          <div className="thumbnail">
            <img src={this.props.img} alt = {this.props.children} />
            <div className="caption">
              <h3>{this.props.children}</h3>
              <p>
                {this.props.price} VNĐ
              </p>
              <p>
                <a href="a" className="btn btn-primary" onClick = {this.onBuy2}>Mua</a>
                <a href="a" className="btn btn-default">Xem</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Product;
