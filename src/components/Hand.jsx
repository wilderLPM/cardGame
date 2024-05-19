import {useDeckContext} from "../contexts/DeckContext";
import {useState} from 'react';
import Card from "./Card";

export default function Hand(){
    const {deck} = useDeckContext();
    console.log(deck);
    const [hand, setHand] = useState([deck[0],deck[1]]);
    return(
        <>
            {hand.map(card => 
            <Card key={card.name} card={card} />
            )}
        </>
    );
}