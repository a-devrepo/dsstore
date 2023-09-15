import './styles.css';
import homeIcon from '../../assets/home.svg';

export default function Header() {
    return (
        <header>
            <div className="container header-content-container">
                <nav className="nav-bar">
                    <div>Início</div>
                    <div>Produtos</div>
                    <div>Sobre nós</div>
                </nav>
                <img src={homeIcon} alt="Home" />
            </div>
        </header>
    )
}