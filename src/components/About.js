import './About.css';
import resume from './../assets/resume.pdf'

function About () {
    return (
        <div id="about">
            <h3 className="title">ABOUT ME</h3>
            <b className="about-text">Hi! I'm Lauren, a 4th-year computer science major at UCR and front-end developer.</b>
            <b className="about-text">My passion is creating harmonious UI/UX designs that provide a seamless and intuitive experience across both web and mobile platforms.</b>
            <b className="about-text">I'm currently working with React and React Native, in combination with Typescript and CSS.</b>
            <a href={resume} target="_blank" className="resume">
                <b className="resume-text">My Resume</b>
            </a>
        </div>
    )
}

export default About;