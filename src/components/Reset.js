import React, {Component} from 'react';
//import Product from'./components/Product'


class Reset extends Component {

	Reset =()=>
	{
		this.props.onReceiveReset();
	}
    render(){
        return(
            <button type="button" className="btn btn-success" onClick ={()=> {this.Reset()}}>reset</button>
        );
    }
}

export default Reset;
