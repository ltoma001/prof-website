import './Hero.css';
import github from './../assets/github.webp';
import linkedin from './../assets/linkedin.png';
import headshot from './../assets/headshot.jpg';

function Hero () {
    return (
        <div id="home">
            <div className="content-left">
                <h1>FRONT-END DEVELOPER</h1>
                <h2>4th Year Computer Science Major @ UCR</h2>
                <h2>Former Product Development Intern @ Quicken Inc</h2>
                <h2>Former Mobile QA Intern @ Quicken Inc</h2>
                <div className="logo-container">
                    <a href="https://github.com/ltoma001" target="_blank" rel="noreferrer">
                        <img src={github} alt="Github" className="small-image" />
                    </a>
                    <a href="https://www.linkedin.com/in/lauren-tomasi/" target="_blank" rel="noreferrer">
                        <img src={linkedin} alt="LinkedIn" className="small-image" />
                    </a>
                </div>
            </div>
            <div className="content-right">
            <img src={headshot} alt="Headshot" className="headshot" />
            </div>
        </div>
    )
}

export default Hero;