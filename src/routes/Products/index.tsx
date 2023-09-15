import { Outlet } from "react-router-dom";
import "./styles.css";

export default function Products() {

    return (
        <>
            <main>
                <section>
                    <div className="container">
                        <div className="products-menu">
                            <div className="container products-menu-content-container">
                                <nav className="nav-bar">
                                    <div>Computadores</div>
                                    <div>Eletrônicos</div>
                                    <div>Livros</div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </section>
                <Outlet></Outlet>
            </main>
        </>
    );
}