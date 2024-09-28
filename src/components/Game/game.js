import './game.css';

const Game = ({game}) => {
    return (
        <li className="game-item">
            <img src={game.poster} alt="{game.nome}"/>
            <h4>{game.nome}</h4>
            <p>Ano: {game.anoLancamento}</p>
        </li>
    )
}

export default Game;