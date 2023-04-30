import React from "react";
import styles from "@/styles/logo.module.scss";


const Logo = ():JSX.Element => {

    return (
        <div id={styles.logo_container}>
            <div className={styles.logo_circle} id={styles.circle1}></div>
            <div className={styles.logo_circle} id={styles.circle2}></div>
            <div className={styles.logo_circle} id={styles.circle3}></div>
        </div>
    )
};


export default Logo;