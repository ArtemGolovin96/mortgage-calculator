import './App.css';
import React, { Component } from 'react';

class Label extends Component {
    render () {
        return (
            <lable className="inputcontainer">
                <p className='p summ'>{this.props.title}</p>
              <input className='input' name="sum" placeholder='Сумма ипотечного займа' onChange={this.props.onChange}></input>
              <hr></hr>
            </lable>
          )
    }
;
}

export default Label;