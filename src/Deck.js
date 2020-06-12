import React, { Component } from 'react'
import axios from 'axios';
import NewCard from './NewCard';
import './Deck.css'

const API_BASE_URL=  "https://deckofcardsapi.com/api/deck";
class Deck extends Component{
    constructor(props){
        super(props);
        this.state = {deck:null,drawn:[]};
        this.getCard = this.getCard.bind(this)
    }
    async componentDidMount(){
        let deck = await axios.get(`${API_BASE_URL}/new/shuffle/`);
        this.setState({deck:deck.data})
    }
    async getCard(){
        let card_URL  = `${API_BASE_URL}/${this.state.deck.deck_id}/draw/`;
        try {
        let cardes = await axios.get(card_URL);
        console.log(cardes.data)
        if(!cardes.data.success){
            throw new Error('No Card Remaining');
        }
        let card = cardes.data.cards[0];
        console.log(card);
        this.setState(st=>({
            drawn:[
                ...st.drawn,{id:card.code,image:card.image,name:`${card.suit} ${card.value}`}
            ]
        }));
        }catch (err) {
            alert(err);
        }
        
    }
    render(){
        const cards = this.state.drawn.map(c=>(
            <NewCard name = {c.name} image = {c.image} key={c.id}/>
        ))
        return(
            <div>
                <h1 className= 'h1'>Card Deck</h1>
                <button className='btn' onClick = {this.getCard}>Get Card</button>
                <div className = 'cards'>
                {cards}    
                </div>
                
            </div>
        )
    }
}
export default Deck;