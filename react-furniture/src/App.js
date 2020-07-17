import React, {Component} from 'react';
import Furniture from "./components/Furniture"

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      chair: "Grandma's Favorite Chair"
    }
  }
  
  render(){
    return(
      <div><h1>Furniture App</h1>
       <Furniture chair={this.state.chair}/>
      </div>
     
    )
  }
}
export default App;
