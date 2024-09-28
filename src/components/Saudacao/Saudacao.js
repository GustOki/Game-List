import './Saudacao.css'

function Saudacao({nome = 'usuário', sobrenome}) {
    //'usuário será o valor default do parâmetro nome
    //const {nome, sobrenome} = props;
    return (
      <h2 className="title">Olá, {nome} {sobrenome}!</h2>
    )
}

export default Saudacao;