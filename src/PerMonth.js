import './App.css';
import React, { Component } from 'react';

class PerMonth extends Component {

    res = () => {
        return +(this.props.sum * (this.props.stavka / 12 / 100) * ((1 + (this.props.stavka / 12 / 100)) ** this.props.srok)
        / (((1 + (this.props.stavka / 12 / 100)) ** this.props.srok) - 1)).toFixed(2)
    }

    render () {

        console.log(this.res())
        return (
            <div className="rescontainer">
                <h6 className="resname">Ежемесячный платеж: </h6>
                <p className='result'>
                    {
                        this.res()? this.res() : 0
                 }
                 </p>
            </div>
          )
    }
;
}

export default PerMonth;