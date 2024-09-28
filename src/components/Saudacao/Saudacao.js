import './Saudacao.css'

function Saudacao({nome = 'usuário'}) {
    return (
      <h2 className="title">Olá, {nome}!</h2>
    )
}

export default Saudacao;