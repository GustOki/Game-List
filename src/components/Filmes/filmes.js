import Filme from '../Filme/filme'
import './filmes.css'

const Filmes = () => {
    const filmes = [
        {
            nome: 'Click',
            poster: 'https://m.media-amazon.com/images/S/pv-target-images/db4ecd96602086507e922d5955bda7c8aaea3fda7ee02ddacd5e2ea508c1acfe.jpg',
            anoLancamento: '2006'
        },
        {
            nome: 'Oppenheimer',
            poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlj1YbHoItzqCZ5OAFzU479DC8HYqEIMKwOQ&s',
            anoLancamento: '2023'
        },
        {
            nome: 'SpaceJam',
            poster: 'https://m.media-amazon.com/images/I/61VX0X7EGDL._AC_UF894,1000_QL80_.jpg',
            anoLancamento: '1996'
        },
        {
            nome: 'Vingadores: Guerra Infinita',
            poster: 'https://br.web.img2.acsta.net/pictures/18/03/16/15/08/2019826.jpg',
            anoLancamento: '2018'
        },
        {
            nome: 'The Batman',
            poster: 'https://br.web.img3.acsta.net/pictures/22/03/02/19/26/3666027.jpg',
            anoLancamento: '2022'
        },
    ]

    return(
        <section className="filmes">
            <h2>Meus filmes favoritos</h2>
            <ul className="filmes-lista">
                {filmes.map((filme, index) => (
                    <Filme filme={filme} key={index}/>
                ))}
            </ul>
        </section>
    )
}

export default Filmes;