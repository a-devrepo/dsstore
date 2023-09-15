import './styles.css';
import homeIcon from '../../assets/home.svg';
import { NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <div className="container header-content-container">
                <nav className="nav-bar">
                    <NavLink to="/home">Início</NavLink>
                    <NavLink to="/products">Produtos</NavLink>
                    <NavLink to="/about">Sobre nós</NavLink>
                </nav>
                <img src={homeIcon} alt="Home" />
            </div>
        </header>
    )
}