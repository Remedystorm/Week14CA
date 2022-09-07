//Movie Data child

import React from "react";


export default class MoviePopUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            typeValue: '',
            stars: props.stars,
            comment: props.comment
        
        }
        this.onSubmit = this.onSubmit.bind(this)
    }

    onSubmit(event) {
        event.preventDefault()
       let starUpdate = this.state.stars.slice();
       let commentUpdate =this.state.comment.slice()
      starUpdate.push(parseInt(document.getElementById('selector').value));
      commentUpdate.push(document.getElementById('review').value)
      console.log(starUpdate)
        this.setState({
            stars: starUpdate,
            comment: commentUpdate,
            typeValue: ''
        })


    }


render() {
    const average = this.state.stars.reduce((a, b) => a + b) / this.state.stars.length
    let reviews = this.state.comment.map((x) => <p style={{borderBottom: '2px solid black'}}>{x}</p>)
    const displayed = average.toFixed(1)

    return (
         <> 
            <span className="size"> {this.props.name} </span>  

            <span> {this.props.date}</span> 
            <span className="scorePosition">{displayed}</span>

            <span className="scorePosition" id='star-five'></span>

            <p style={{ borderTop: '2px solid black', margin: '0px', fontSize: '20px'}}>Plot</p>

            <div className="scroll" style={{borderBottom: '2px solid black'}}>
                {this.props.synopsis}  
            </div> 
            <p style={{ borderTop: '2px solid black', margin: '0px', fontSize: '20px'}}>Reviews</p>
            <div className="scroll2">
                {reviews}
            </div>   
            <input type="text" className="form-control" id="review" Value={this.state.typeValue}/>
                    <select classNaame="" id="selector">                       
                        <option value='1'>1 Star</option>
                        <option value='2'>2 Stars</option>
                        <option value="3">3 Stars</option>
                        <option value="4">4 Stars</option>
                        <option value="5">5 Stars</option>
                      </select>
                    
                    <button type="button" onClick={this.onSubmit} id="sub">Submit</button>
        </> 
    )
}

}