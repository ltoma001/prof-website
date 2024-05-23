import './Education.css';

function Education () {
    return(
        <div id="edu">
            <h3 className="title">EDUCATION</h3>
            <table class="degree">
                <tr>
                    <td className="degree-text">B.S. in Computer Science @ University of California, Riverside</td>
                    <td className="date-text">Expected Mar 2023</td>
                </tr>
            </table>
            <ul>
                <li className="gpa-text">Chancellor's Honor List 2023</li>
                <li className="gpa-text">Cumulative GPA: 3.51</li>
            </ul>
            <table class="degree">
                <tr>
                    <td className="degree-text">A.S. in Computer Science @ San Diego Miramar College</td>
                    <td className="date-text">May 2022</td>
                </tr>
            </table>
            <ul>
                <li className="gpa-text">Graduated with Honors</li>
                <li className="gpa-text">Cumulative GPA: 4.00</li>
            </ul>
        </div>
    )
}

export default Education;