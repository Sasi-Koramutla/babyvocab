import React, { Component } from 'react';
import birds from "./components/data";
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

  render(){
    return(
      <div>
        <h1>Birds app</h1>
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
                <th>Approved</th>
              </tr>
            </thead>
            <tbody>
              {this.state.birds.map((bird,index) => {
                return (
                  <tr key={index}>
                    <td>{bird.birdName}</td>
                    <td><img style={{maxWidth:"100px"}} alt="no-img" src={bird.image}/></td>
                    <td>{bird.user}</td>
                    <button id="approveToggle">approved</button>
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
