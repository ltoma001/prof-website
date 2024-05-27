import React from 'react'
import styles from "./Hero.module.css"
import { getImageUrl } from '../../utils'

export const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>FRONTEND DEVELOPER</h1>
            <p className={styles.description}>
                4th Year Computer Science Major @ UCR <br/>
                Former Product Development Intern @ Quicken Inc <br/>
                Former Mobile QA Intern @ Quicken Inc
            </p>
            <a href="mailto:ltoma001@ucr.edu" className={styles.contactBtn}>Contact Me</a>
        </div>
        <img src={getImageUrl("hero/headshot.jpg")} alt="Headshot" className={styles.heroImg}/>
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
    </section>
  )
}
