export default function EndTurnButton({turn, setTurn, setCurrentMana}){
    function handleClick(){
        setTurn(turn + 1);
        setCurrentMana(turn);
    }
    return(
        <button onClick={handleClick}>End turn</button>
    );
}