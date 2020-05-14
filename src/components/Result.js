import React, {Component} from 'react';
//import Product from'./components/Product'


class Result extends Component {
    render(){
        return(
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <p>
                    Color : red - FrontSize : 15px
                </p>
                <div id="content">
                    Nội dung setting
                </div>
            </div>
        );
    }
}

export default Result;
