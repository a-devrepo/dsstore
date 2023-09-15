import './styles.css';
import homeIcon from '../../assets/home.svg';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <div className="container header-content-container">
                <nav className="nav-bar">
                    <NavLink to="/home" className={({ isActive }) => isActive ? "menu-item menu-active" : "menu-item"}>Início</NavLink>
                    <NavLink to="/products" className={({ isActive }) => isActive ? "menu-item menu-active" : "menu-item"}>Produtos</NavLink>
                    <NavLink to="/about" className={({ isActive }) => isActive ? "menu-item menu-active" : "menu-item"}>Sobre nós</NavLink>
                </nav>
                <Link to="/">
                    <img src={homeIcon} alt="Home" />
                </Link>

            </div>
        </header>
    )
}