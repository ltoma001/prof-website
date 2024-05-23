import './Hero.css';

function Hero () {
    return (
        <div id="home">
            <div className="content-left">
                <h1>FRONT-END DEVELOPER</h1>
                <h2>4th Year Computer Science Major @ UCR</h2>
                <h2>Former Product Development Intern @ Quicken Inc</h2>
                <h2>Former Mobile QA Intern @ Quicken Inc</h2>
                <div className="logo-container">
                    <a href="https://github.com/ltoma001">
                        <img src="/github.png" alt="Github" className="small-image"/>
                    </a>
                    <a href="https://www.linkedin.com/in/lauren-tomasi/">
                        <img src="/linkedin.png" alt="LinkedIn" className="small-image" />
                    </a>
                </div>
            </div>
            <div className="content-right">
            <img src="/headshot.jpg" alt="Headshot" className="headshot" />
            </div>
        </div>
    )
}

export default Hero;