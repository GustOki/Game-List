import Game from '../Game/game'
import './games.css'

const Games = () => {
    const games = [
        {
            nome: 'Super Mario World',
            poster: 'https://cdn.awsli.com.br/2614/2614028/produto/246277272/super-mario-world-jp_frente-a3-f2snm86y9g.jpg',
            anoLancamento: '1990'
        },
        {
            nome: 'The Legend of Zelda: Breath of the Wild',
            poster: 'https://m.media-amazon.com/images/I/61Cr-6BDTML._AC_SL1024_.jpg',
            anoLancamento: '2017'
        },
        {
            nome: 'Undertale',
            poster: 'https://products.eneba.games/resized-products/xSwb5zB_350x200_1x-0.jpg',
            anoLancamento: '2015'
        },
        {
            nome: 'Grim Fandango Remastered',
            poster: 'https://m.media-amazon.com/images/I/711OKwStUqL._UF1000,1000_QL80_.jpg',
            anoLancamento: '2015'
        },
        {
            nome: 'Super Smash Bros. Brawl',
            poster: 'https://m.media-amazon.com/images/I/71aV0SbNGCL._AC_UF894,1000_QL80_.jpg',
            anoLancamento: '2008'
        },
    ]

    return(
        <section className="games">
            <h2>Meus games favoritos:</h2>
            <ul className="games-lista">
                {games.map((game, index) => (
                    <Game game={game} key={index}/>
                ))}
            </ul>
        </section>
    )
}

export default Games;