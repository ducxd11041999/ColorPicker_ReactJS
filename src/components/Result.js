import React, {Component} from 'react';
//import Product from'./components/Product'


class Result extends Component {
    constructor(props) {
        super(props);
        this.setStyle = this.setStyle.bind(this);   
    }
    setStyle()
    {
        //console.log(this.props.color)
        return(
            {color : this.props.color,
            borderColor: this.props.color,
            fontSize: this.props.size})
    }
    render(){
        return(
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <p>
                    Color : {this.props.color} - FrontSize : {this.props.size}px
                </p>
                <div id="content" style={this.setStyle()}>
                    Nội dung setting
                </div>
            </div>
        );
    }
}

export default Result;
