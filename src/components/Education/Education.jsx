import React from 'react'
import styles from './Education.module.css'

export const Education = () => {
  return (
    <section id="edu" className={styles.container}>
        <h2 className={styles.title}>Education</h2>
        <div className={styles.content}>
            <div className={styles.eduItem}>
                <table>
                    <tbody>
                        <tr>
                            <td className={styles.degree}>B.S. in Computer Science @ University of California, Riverside</td>
                            <td className={styles.date}>Expected Mar 2023</td>
                        </tr>
                    </tbody>
                </table>
                <ul className={styles.degreeInfoList}>
                    <li className={styles.degreeInfo}>Chancellor's Honor List 2023</li>
                    <li className={styles.degreeInfo}>Cumulative GPA: 3.51</li>
                </ul>
            </div>
            <div className={styles.eduItem}>
                <table>
                    <tbody>
                        <tr>
                            <td className={styles.degree}>A.S. in Computer Science @ San Diego Miramar College</td>
                            <td className={styles.date}>May 2022</td>
                        </tr>
                    </tbody>
                </table>
                <ul className={styles.degreeInfoList}>
                    <li className={styles.degreeInfo}>Graduated with Honors</li>
                    <li className={styles.degreeInfo}>Cumulative GPA: 4.00</li>
                </ul>
            </div>
        </div>
    </section>
  )
}
