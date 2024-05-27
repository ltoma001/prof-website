import React from 'react'
import styles from './Miscellaneous.module.css'
import activities from "../../data/misc.json"
import { MiscCard } from "./MiscCard"

export const Miscellaneous = () => {
  return (
    <section id="misc" className={styles.container}>
        <h2 className={styles.title}>Miscellaneous</h2>
        <div className={styles.activities}>
            {
                activities.map((activity, id) => {
                    return (
                        <MiscCard key={id} activity={activity} />
                    )
                })
            }
        </div>
    </section>
  )
}
