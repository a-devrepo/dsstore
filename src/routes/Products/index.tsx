import "./styles.css";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function Products() {

    return (
        <main>
            <section>
                <div className="container">
                    <div className="products-menu">
                        <div className="container products-menu-content-container">
                            <nav className="products-nav-bar">
                                <NavLink to="/products/computers">Computadores</NavLink>
                                <NavLink to="/products/electronics" >Eletrônicos</NavLink>
                                <NavLink to="/products/books">Livros</NavLink>
                            </nav>
                        </div>
                    </div>
                    <Outlet></Outlet>
                </div>
            </section>
        </main>
    );
}