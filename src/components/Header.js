import './Header.css';

function Header() {
    return (
        <header>
            <div className="nav-item">
                <a href="#home">
                    <h2 id="name">Lauren Tomasi</h2>
                </a>
            </div>
            <nav role="navigation">
                <ul className="nav-list">
                    <li className="list-item">
                        <a href="#about" className="nav-item">
                        <div>About</div>
                        </a>
                    </li>
                    <li className="list-item">
                        <a href="#skills" className="nav-item">
                        <div>Skills</div>
                        </a>
                    </li>
                    <li className="list-item">
                        <a href="#edu" className="nav-item">
                        <div>Edu</div>
                        </a>
                    </li>
                    <li className="list-item">
                        <a href="#exp" className="nav-item">
                        <div>Exp</div>
                        </a>
                    </li>
                    <li className="list-item">
                        <a href="#misc" className="nav-item">
                        <div>Misc</div>
                        </a>
                    </li>
                    <li>
                        <a href="#footer" className="nav-item">
                        <div>Contact</div>
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;