import React, { Component } from 'react';
import './App.css';

class App extends Component {
  getStuff() {
    return <h1> First Ever React Run</h1>
  }

  getMorningGreeting() {
    return <div>Good Morning! :D</div>;
  }

  getEveningGreeting() {
    return <div>Good Evening! :D</div>;

  }

  showCompany(name, revenue) {
    return <div id={name}>{name} has a revenue of {revenue}</div>;
  }

  getClassName(temperature) {
    if(temperature < 15){
      return "freezingxxxx"
    } else if(temperature < 30){
      return "FAIR"
    } else {
      return "ESCAPE"
    }
  }

  render() {

    let companies = [
      { name: "Tesla", revenue: 140 },
      { name: "Microsoft", revenue: 300 },
      { name: "Google", revenue: 600 }
    ]

    // return new Date().getHours() > 12 ? this.getEveningGreeting() : this.getMorningGreeting();
    return (
      
      <div>
        
        
        <div className="ex-space">
          <h4 className='ex-title'>Spot-check 1</h4 >
          <div className="exercise" id="spotcheck-1">
          {this.getStuff()}
          </div>
        </div>

        <div className="ex-space">
          <h4 className='ex-title'>Spot-check 2</h4>
          <div className="exercise" id="spotcheck-2">
            {this.getEveningGreeting()}
          </div>
        </div>

        <div className="ex-space">
          <h4 className='ex-title'>Spot-check 3</h4>
          <div className="exercise" id="spotcheck-3">
            {this.getMorningGreeting()}
          </div>
        </div>

        <div className="ex-space">
          <h4 className='ex-title'>Exercise 1</h4>
          <div className="exercise" id="ex-1">
            {companies.map(c => this.showCompany(c.name, c.revenue))}
          </div>
        </div>

        <div className="ex-space">
          <h4 className='ex-title'>Exercise 2</h4>
          <div className="exercise" id="ex-2">
            <div id="weatherBox" class={this.getClassName(190)}></div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
