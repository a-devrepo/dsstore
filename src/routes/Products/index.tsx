import "./styles.css";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function Products() {

    return (
        <main>
            <section>
                <div className="container">
                    <nav className="products-nav-bar mt20 mb20">
                        <div className="products-menu-content-container">
                            <NavLink to="/products/computers" className={({ isActive }) => isActive ? "menu-item menu-active" : "menu-item"}>Computadores</NavLink>
                            <NavLink to="/products/electronics" className={({ isActive }) => isActive ? "menu-item menu-active" : "menu-item"}>Eletrônicos</NavLink>
                            <NavLink to="/products/books" className={({ isActive }) => isActive ? "menu-item menu-active" : "menu-item"}>Livros</NavLink>
                        </div>
                    </nav>
                    <Outlet></Outlet>
                </div>
            </section>
        </main>
    );
}