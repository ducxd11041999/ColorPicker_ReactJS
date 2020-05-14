import React, {Component} from 'react';
//import Product from'./components/Product'


class SizeSetting extends Component {
    changeSize(val)
    {
        console.log(val)
        this.props.onReceiveSize(val)
    }
    render(){
        return(
                <div className="panel panel-warning">
                    <div className="panel-heading">
                        <h3 className="panel-title">Size: {this.props.size} px</h3>
                    </div>
                    <div className="panel-body">
                        <button type="button" className="btn btn-success" onClick ={()=> {this.changeSize(2)}}>Tăng</button>
                        <button type="button" className="btn btn-success" onClick ={()=> {this.changeSize(-2)}}>Giảm</button>
                    </div>
                </div>
        );
    }
}

export default SizeSetting;
