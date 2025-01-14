import { NavLink } from '.';

export { Nav };

function Nav() {
    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark">
            <div className="navbar-nav">
                <NavLink href="/" exact className="nav-item nav-link">Home</NavLink>
                <NavLink href="/empresas" className="nav-item nav-link">Empresas</NavLink>
                <NavLink href="/users" className="nav-item nav-link">EstacionamentON</NavLink>
            </div>
        </nav>
    );
}