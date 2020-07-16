import React, { Component } from "react";
import ReactDOM, { render } from "react-dom";

let SkiData = {
  total: 20,
  powder: 100,
  backcountry: 10,
  goal:100

}

class SkiDayCounter extends Component{
  
  getPercent = decimal => {
    return decimal *100 + "%"
  }

  calcGoalProgress = (total, goal) => {
    return this.getPercent(total/goal)
  }
  
  render(){
    const {total, powder, backcountry, goal} = this.props;
    return(
      <section>
        <div>
          <p>Total days: {total}</p>
        </div>
        <div>
          <p>Powder days: {powder}</p>
        </div>
        <div>
          <p>Backcountry days: {backcountry}</p>
        </div>
        <div>
          <p>Goal Progress: {this.calcGoalProgress(total, goal)}</p>
        </div>
      </section>
    )
  }
}

render(
  <SkiDayCounter total={SkiData.total} powder={SkiData.powder} backcountry={SkiData.backcountry} goal={SkiData.goal}/>,
  document.getElementById("root")
);