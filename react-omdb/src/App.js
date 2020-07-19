import React, {Component} from 'react';
import Movie from "./components/Movie";

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      baseURL: 'http://www.omdbapi.com/?',
      apikey: 'apikey=' + 'bf73b3c',
      query: '&t=',
      movieTitle: '',
      searchURL: '',
      movie: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange (event) {
    this.setState({ [event.target.id]: event.target.value })
  }
  handleSubmit (event) {
    event.preventDefault()
    this.setState({
      searchURL: this.state.baseURL + this.state.apikey + this.state.query +  this.state.movieTitle
    }, () =>{
      fetch(this.state.searchURL).then(response =>{
        return response.json()
      }).then(json => this.setState({movie: json}),
        err => console.log(err))
    })
  }

  componentDidMount(){

  }
  render(){
    return(
      <>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='movieTitle'>Title</label>
          <input
            id='movieTitle'
            type='text'
            value={this.state.movieTitle}
            onChange={this.handleChange}
          />
          <input
            type='submit'
            value='Find Movie Info'
          />
        </form>
     {/*    <a href={this.state.searchURL}>{this.state.searchURL}</a> */}
        <div>
          <Movie
          movie={this.state.movie}/>
        </div>
      </>
    )
  }
}
export default App;
