import { Link, useLocation } from 'react-router-dom';

function Header() {
    const location = useLocation();

    const isActive = (path) => {
        return location.pathname === path ? 'active' : '';
    };

    return (
        <header className="header">
            <div className="header-content">
                <img src="/assets/shared/logo.svg" alt="logo" className="logo" />
                <div className="divider"></div>
                <ul className="header-links">
                    <li className={`header-link ${isActive('/')}`}>
                        <Link to="/" style={{ display: 'block', padding: '0 10px', height: '100%', display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
                            <span className="number-bold">00</span> HOME
                        </Link>
                    </li>
                    <li className={`header-link ${isActive('/destination')}`}>
                        <Link to="/destination" style={{ display: 'block', padding: '0 10px', height: '100%', display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
                            <span className="number-bold">01</span> DESTINATION
                        </Link>
                    </li>
                    <li className={`header-link ${isActive('/crew')}`}>
                        <Link to="/crew" style={{ display: 'block', padding: '0 10px', height: '100%', display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
                            <span className="number-bold">02</span> CREW
                        </Link>
                    </li>
                    <li className={`header-link ${isActive('/technology')}`}>
                        <Link to="/technology" style={{ display: 'block', padding: '0 10px', height: '100%', display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
                            <span className="number-bold">03</span> TECHNOLOGY
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Header;