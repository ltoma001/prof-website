import React from 'react'
import styles from './About.module.css'
import { getImageUrl } from '../../utils'

export const About = () => {
  return (
    <section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img
                src={getImageUrl("about/about.png")}
                alt="Me at museum"
                className={styles.aboutImg}
            />
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
                    <div className={styles.aboutItemText}>
                        <h3>Frontend Developer</h3>
                        <p>I'm a 4th-year computer science major at UCR with experience in building responsive web and mobile applications</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
                    <div className={styles.aboutItemText}>
                        <h3>UI/UX Designer</h3>
                        <p>My passion is creating harmonious UI/UX designs that provide a seamless and intuitive experience across both web and mobile platforms</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/uiIcon.png")} alt="UI icon" />
                    <div className={styles.aboutItemText}>
                        <h3>Job Hunter</h3>
                        <p>I'm currently working with React and React Native, in combination with Javascript, Typescript and CSS<br/></p>
                        <div className={styles.btnContainer}>
                            <a
                                href={getImageUrl("about/resume.pdf")}
                                target="_blank"
                                className={styles.resume}
                            >
                                My Resume
                            </a>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </section>
  )
}
