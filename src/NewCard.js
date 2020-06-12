import React, { Component } from 'react'
import './NewCard.css'
class NewCard extends Component{
    constructor(props){
        super(props);
        let angle = Math.random() * 90 -45;
        let xPos = Math.random()*40 -20;
        let yPos =  Math.random()*40 -20;
        this._transform = `translate(${xPos}px,${yPos}px) rotate(${angle}deg)`;
        console.log(this._transform)
    }
    render(){
       
        return(
            <div className = 'NewCard'>
                    <img style = {{transform:this._transform}} src={this.props.image} alt={this.props.name}/>
            </div>
            
        )
    }
}
export default NewCard;