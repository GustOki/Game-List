import './header.css';
import Saudacao from '../Saudacao/Saudacao';

const Header = () => {
    return (
        <header className="header">
            <h1>Meu projeto</h1>
            <Saudacao nome="Gustavo" sobrenome="Oki"/>
        </header>
    )
}

export default Header;