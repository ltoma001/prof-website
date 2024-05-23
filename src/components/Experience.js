import './Experience.css';

function Experience () {
    return(
        <div id="exp">
            <h3 className="title">EXPERIENCE</h3>
            <table class="work">
                <tr>
                    <td className="role-text">Product Development Intern{"\n"}<i>Quicken Inc</i></td>
                    <td className="date-text">June 2023 - Sep 2023</td>
                </tr>
            </table>
            <ul>
                <li className="desc-text">Extracted new fields from persistence layer to introduce transaction filters by leveraging React Native
and Redux, enhancing user experience by giving users flexibility in organizing transactions.</li>
                <li className="desc-text">Developed and tested 5+ bug fixes and 2 personal projects that were released in production, working
closely with senior developers to implement best practices and maintain code quality.</li>
                <li className="desc-text">Led the design with cross-functional teams to develop a home screen dashboard card using Figma and
Jira to aggregate tagged transactions for enhanced visibility and usability.</li>
            </ul>
            <table class="work">
                <tr>
                    <td className="role-text">Mobile QA Intern{"\n"}<i>Quicken Inc</i></td>
                    <td className="date-text">May 2022 - Aug 2022</td>
                </tr>
            </table>
            <ul>
                <li className="desc-text">Designed automation test framework and implemented 20+ test scripts in Java to ensure the mobile
application functionality and improve developer experience via the configured Jenkins pipeline.</li>
                <li className="desc-text">Implemented final design to realize Proof of Concept for switching automation platforms from
Saucelabs to LambdaTest, paving the way for large scale team projects outside of internship scope.</li>
                <li className="desc-text">Introduced CI/CD to mobile application pipeline by integrating new test suites to specific subfeatures,
allowing spot testing without running lengthy workflows, significantly reducing deployment time.</li>
            </ul>
        </div>
    )
}

export default Experience;