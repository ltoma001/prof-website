import './Skills.css';
import javascript from './../assets/javascript.webp';
import typescript from './../assets/typescript.webp';
import css from './../assets/css.webp';
import html from './../assets/html.webp';
import java from './../assets/java.webp';
import cpp from './../assets/cpp.webp';
import python from './../assets/python.webp';

function Skills () {
    return(
        <div id="skills">
            <h3 className="title">SKILLS</h3>
            <b className="category-text">Languages</b>
            <div className="skill-icon-container">
                {/* <li className="skill-text">Typescript</li>
                <li className="skill-text">Javascript</li>
                <li className="skill-text">HTML</li>
                <li className="skill-text">CSS</li>
                <li className="skill-text">Java</li>
                <li className="skill-text">C/C++</li>
                <li className="skill-text">Python</li>
                <li className="skill-text">SQL</li> */}
                <img src={javascript} alt="JS Icon" className="skill-icon" />
                <img src={typescript} alt="TS Icon" className="skill-icon" />
                <img src={css} alt="CSS Icon" className="skill-icon" />
                <img src={html} alt="HTML Icon" className="skill-icon" />
                <img src={java} alt="Java Icon" className="skill-icon" />
                <img src={cpp} alt="C Plus Plus Icon" className="skill-icon" />
                <img src={python} alt="Python Icon" className="skill-icon" />
            </div>
            <b className="category-text">Tools</b>
            <ul>
                <li className="skill-text">Appium</li>
                <li className="skill-text">Appium Inspector</li>
                <li className="skill-text">Figma</li>
                <li className="skill-text">Git</li>
                <li className="skill-text">Jenkins</li>
                <li className="skill-text">JIRA</li>
                <li className="skill-text">LambdaTest</li>
                <li className="skill-text">Node.js</li>
                <li className="skill-text">NLTK</li>
                <li className="skill-text">React</li>
                <li className="skill-text">React Native</li>
                <li className="skill-text">Redux</li>
                <li className="skill-text">Saucelabs</li>
                <li className="skill-text">SpaCy</li>
                <li className="skill-text">TestRail</li>
                <li className="skill-text">Xcode</li>
            </ul>
        </div>
    )
}

export default Skills;