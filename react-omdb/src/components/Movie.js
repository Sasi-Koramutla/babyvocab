import React, {Component} from "react";

class Movie extends Component{
    render(){
        return(
        <div class="movie"> 
            <div> <h1> {this.props.movie.Title} </h1> </div>
            <div> {this.props.movie.Year} </div>
            <img class="movie-img" src={this.props.movie.Poster}/>
            <p>{this.props.movie.Plot}</p>
        </div>
        )
    }
}

export default Movie;