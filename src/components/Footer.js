import './Footer.css';

function Footer () {
    return (
        <div id="footer">
            <footer>
                <ul className="contact-list">
                    <li className="contact-item">
                        <a href="https://www.linkedin.com/in/lauren-tomasi"
                        target="_blank"
                        rel="noreferrer"
                        className="contact-link">
                        <div>LinkedIn</div>
                        </a>
                    </li>
                    <li className="contact-item">
                        <a href="https://github.com/ltoma001"
                        target="_blank"
                        rel="noreferrer"
                        className="contact-link">
                        <div>GitHub</div>
                        </a>
                    </li>
                    <li className="contact-item">
                        <a href="mailto: ltoma001@ucr.edu"
                        target="_blank"
                        rel="noreferrer"
                        className="contact-link">
                        <div>Email</div>
                        </a>
                    </li>
                </ul>
            </footer>
        </div>
    )
}

export default Footer;