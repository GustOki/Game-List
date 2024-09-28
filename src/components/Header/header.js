import './header.css';
import Saudacao from '../Saudacao/Saudacao';

const Header = () => {
    return (
        <header className="header">
            <h1>Game List</h1>
            <Saudacao nome="gamer"/>
        </header>
    )
}

export default Header;