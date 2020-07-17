import React, { Component } from 'react';
import birds from "./components/data";
import $ from 'jquery';
console.table(birds);

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      birds: birds,
      birdName: '',
      image: '',
      user: '',
      approved: false

    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.approveToggle = this.approveToggle.bind(this)
    this.deleteBird = this.deleteBird.bind(this)
    this.toggleAdmin = this.toggleAdmin.bind(this)
  }
  handleChange (event) {
    this.setState({ [event.target.id]: event.target.value })
  }

  handleSubmit (event) {
    event.preventDefault()
    const newBird = {
      birdName: this.state.birdName,
      image: this.state.image,
      user: this.state.user,
      approved: false
    }
    const updatedBirds = [...this.state.birds, newBird]
    this.setState({
      playlist: updatedBirds,
      birdName: "",
      image: "",
      user: "",
      approved: false
    })
  }

  approveToggle(event){
    event.preventDefault();
    console.log(event.target.innerText);
    if(event.target.innerText == "approve"){
      $(event.target).text("reject");
      $(event.target).css("background-color","red");
    }
       
    else{
      $(event.target).text("approve");
      $(event.target).css("background-color","green");
      $()
    }
   

  }

  deleteBird(event){
    event.preventDefault();

    let i = event.target.id;
    let updatedBirds = this.state.birds.filter(filterBirds);
    
    function filterBirds (value, index) {
      return index != i;
    }

    /*let updatedBirdsA = this.state.birds;
    let updatedBirdsB = this.state.birds;

    let i = event.target.id;
    console.log(i);
    updatedBirdsA = updatedBirdsA.slice(0,i);

    updatedBirdsB = updatedBirdsB.slice(i+1,updatedBirdsB.length);

    console.log(updatedBirdsA);
    console.log(updatedBirdsB);

    updatedBirds = updatedBirdsA.concat(updatedBirdsB);
    console.log(updatedBirds);

    this.setState({birds:updatedBirds}); */
    this.setState({birds:updatedBirds}); 

  }
  toggleAdmin(event){
    event.preventDefault();
    console.log(event.target.innerText);
    if(event.target.innerText == "Admin"){
      $(event.target).text("NO Admin");
      $(event.target).css("background-color","red");
      $(".toggle").hide();
    }
       
    else{
      $(event.target).text("Admin");
      $(event.target).css("background-color","purple");
      $(".toggle").show();
    }

  }

  render(){
    return(
      <div>
        <h1>Birds app</h1>
        <button id="admin" onClick={this.toggleAdmin}>Admin</button> 
        <h3>Click the above button to toggle admin mode</h3>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="birdName">
            Bird Name
            <input type="text" id="birdName" value={this.state.birdName} onChange={this.handleChange}/>
          </label>
          <label htmlFor="image">
            Image
            <input type="text" id="image" value={this.state.image} onChange={this.handleChange}/>
          </label>
          <label htmlFor="user">
           user
            <input type="text" id="user" value={this.state.user} onChange={this.handleChange}/>
          </label>
          <label>
            <input type="submit" />
          </label>
        </form>
        <main>
          <div>

        
          <table>
            <thead>
              <tr>
                <th>Bird Name</th>
                <th>Image</th>
                <th>User</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.birds.map((bird,index) => {
                return (
                  <tr key={index}>
                    <td>{bird.birdName}</td>
                    <td><img style={{maxWidth:"100px"}} alt="no-img" src={bird.image}/></td>
                    <td>{bird.user}</td>
                    <td>
                    <button className="toggle" id="approveToggle" onClick={this.approveToggle}>approve</button>
                    <button id={index} className="deleteBird" onClick={this.deleteBird}>delete</button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
          </div>
        </main>
      </div>
    )
  }
}

export default App;
