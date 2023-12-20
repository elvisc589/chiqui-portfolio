import styles from './style.module.scss';
import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';
import { slideUp, opacity } from './animation';
import Rounded from '../../common/RoundedButton';
export default function index() {

    const phrase = "Driving digital solutions for individuals, small businesses, and organizations. Together we can set the standard. Always in pursuit of excellence.";
    const description = useRef(null);
    const isInView = useInView(description)
    return (
        <div ref={description} className={styles.description}>
            <div className={styles.body}>
                <p>
                {
                    phrase.split(" ").map( (word, index) => {
                        return <span key={index} className={styles.mask}><motion.span variants={slideUp} custom={index} animate={isInView ? "open" : "closed"} key={index}>{word}</motion.span></span>
                    })
                }
                </p>
                <motion.p variants={opacity} animate={isInView ? "open" : "closed"}>My relentless passion and dedication fuel my pursuit of continuous growth, both as a developer and as an individual committed to learning and evolving.</motion.p>
                <div data-scroll data-scroll-speed={0.1}>
                    <a href="/about">
                    <Rounded className={styles.button}>
                        <p>About me</p>
                    </Rounded>
                    </a>
                </div>
            </div>
        </div>
    )
}