import React, {Component} from 'react';
import './App.css';
import ColorPicker from './components/ColorPicker'
import Reset from './components/Reset'
import Result from './components/Result'
import SizeSetting from './components/SizeSetting'
//import Product from'./components/Product'


class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        color : 'red',
        fontSize: 12
      };
      this.onSetColor = this.onSetColor.bind(this) /// neu khong co the dung =()=> cua onsetColor
    }
    onSetColor(params) 
    {
        this.setState(
        {
            color: params,
        })
    }
    onChangeSize = (params) =>
    {
        if( (this.state.fontSize + params >= 8) &&  (this.state.fontSize + params <=36))
        {
            this.setState(
            {
                fontSize: this.state.fontSize + params,
            });
        }
    }

    onReset = () =>
    {
         this.setState(
            {
                color: 'red',
                fontSize: 12
            });
    }
    render(){
        return(
        <div className="container mt-50">
            <div className="row">
                <ColorPicker color = {this.state.color} onReceiveColor = {this.onSetColor} />
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <SizeSetting size = {this.state.fontSize}
                    onReceiveSize = {this.onChangeSize}
                />
                <Reset onReceiveReset = {this.onReset}/>
            </div>
            <Result color = {this.state.color} size = {this.state.fontSize}/>
            </div>
        </div>
        );
    }
}
export default App;
