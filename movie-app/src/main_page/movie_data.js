import React from 'react';
import movies from '../movies_array';
import MovieList from './movie_list';
import Banner from './banner';


export default class MovieData extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            active: false,

        }
        this.handleClick = this.handleClick.bind(this)
    }

    

    handleClick() {
        this.setState({
            active: !this.state.active
        });
        console.log('test')

    }
    

    render() {
           let movieInfo = movies.map((x) => <MovieList {... x}/>)       
        return (
               
                <div className='container'>
                     <Banner />
                <div className='width'>
                    {this.keyAdder}
                {movieInfo}
                </div>
                </div>

            )
    }
}