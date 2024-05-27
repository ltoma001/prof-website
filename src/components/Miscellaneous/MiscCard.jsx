import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./MiscCard.module.css"

export const MiscCard = ({ activity : { title, imageSrc, description, skills, site } }) => {
  return (
    <div className={styles.container}>
        <img
            src={getImageUrl(imageSrc)}
            alt={`Image of ${title}`}
            className={styles.image}
            />
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <ul className={styles.skills}>
            {
                skills.map((skill, id) => {
                    return (
                        <li key={id} className={styles.skill}>
                            {skill}
                        </li>
                    )
                })
            }
        </ul>
        <div className={styles.links}>
            <a href={site} target="_blank" className={styles.link}>Learn More</a>
        </div>
    </div>
  )
}
