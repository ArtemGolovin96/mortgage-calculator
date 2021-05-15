import logo from './logo.svg';
import Label from './Lable';
import PerMonth from './PerMonth';
import './App.css';
import React, { Component } from 'react';

class App extends Component {

  state = {
    summ: 'Сумма: ',
    stavka: 'Ставка в %: ',
    srok: 'Срок в месяцах: ',
    valueSumm: '',
    valueStavka: '',
    valueSrok: '',
  }

  onChangeSum = (e) => {
    e.preventDefault();
    this.setState({ valueSumm: e.target.value,
    })
  }

  onChangeStavka = (e) => {
    e.preventDefault();
    this.setState({ 
                    valueStavka: e.target.value,
    })
  }

  onChangeSrok = (e) => {
    e.preventDefault();
    this.setState({
                    valueSrok: e.target.value
    })
  }

  render () {
    return (
      <div className="App">
        <header className='header'>
          <h1>Калькулятор ипотеки</h1>
          <hr></hr>
        </header>
        <Label title={this.state.summ} value={this.state.valueSumm} onChange={this.onChangeSum}/>
        <Label title={this.state.stavka} value={this.state.valueStavka} onChange={this.onChangeStavka}/>
        <Label title={this.state.srok} value={this.state.valueSrok} onChange={this.onChangeSrok}/>
        <PerMonth sum={this.state.valueSumm} stavka={this.state.valueStavka} srok={this.state.valueSrok}/>
      </div>
    );
  }

}

export default App;
