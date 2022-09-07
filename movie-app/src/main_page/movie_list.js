import React from "react";
import MoviePopUp from "./movie-pop-up";

export default class MovieList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
            name: props.name,
            date: props.releaseDate,
            synopsis: props.synopsis,
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState({
            active: !this.state.active
        });
        
    }
    


    render() {
        return (
            
            <div className='css-fix width'>
                <img src={this.props.coverPhoto} className='img-size' onClick={this.handleClick}/>
                <div className="border-cust">
                {this.state.active && <MoviePopUp name={this.state.name} date={this.state.date} synopsis={this.state.synopsis} comment={this.props.comment} stars={this.props.stars}/>}
                
               
            </div>
            </div>
            
        )
      
    }
}