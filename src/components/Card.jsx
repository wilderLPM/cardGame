export default function Card({card}) {
    return (
        <div className="card">
            <p>{card.cost}</p>
            <p>{card.name}</p>
            <p>{card.ability.description}</p>
            <p>{card.attack}</p>
            <p>{card.hp}</p>
        </div>
    );
}