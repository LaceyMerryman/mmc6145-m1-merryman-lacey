import { NavLink } from "react-router-dom"

export default function Header() {
    return (
        <header className="header">
            <div className="container ehader-inner">
                <div className="brand">
                    <span className="brand-dot" aria-hidden="true" />
                    <span className="brand-text"> Lacey Merryman</span>
                </div>

                <nav aria-label="Primary">
                    <ul className="nav">
                        <li>
                        <NavLink
                            to="/"
                            end
                            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
                        >
                            Home
                        </NavLink>
                        </li>
                        <li>
                        <NavLink
                            to="/about"
                            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
                        >
                            About
                        </NavLink>
                        </li>
                        <li>
                        <NavLink
                            to="/contact"
                            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
                        >
                            Contact
                                </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}