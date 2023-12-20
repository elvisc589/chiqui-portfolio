import styles from './style.module.scss';
import Image from 'next/image';
import Rounded from '../../../common/RoundedButton';
import { useRef, useState, useEffect } from 'react';
import { useScroll, motion, useTransform, useSpring } from 'framer-motion';
import Magnetic from '../../../common/Magnetic';


export default function index() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end end"]
    })
    const x = useTransform(scrollYProgress, [0, 1], [0, 100])
    const y = useTransform(scrollYProgress, [0, 1], [-500, 0])
    const rotate = useTransform(scrollYProgress, [0, 1], [120, 90])
    useEffect(() => {
        const getLocalTime = () => {
            const now = new Date();
            const offset = -5; // Offset for Eastern Standard Time (EST)
            const utc = now.getTime() + now.getTimezoneOffset() * 60000;
            const estTime = new Date(utc + 3600000 * offset);
            const formattedTime = estTime.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit', hour12: true});
            setLocalTime(formattedTime);
        };
        getLocalTime();
    }, []); // Empty array ensures this runs once on initial load




    return (
        <div className={styles.contact}>
            <div className={styles.body}>
                <div className={styles.title}>
                    <span>
                        
                        <h2>Success.</h2>
                        
                    </span>
                    <h2>Message Sent!</h2>
                    <p className={styles.subheader}>I will contact you as soon as possible.</p>
               
                    <motion.div style={{x}} className={styles.buttonContainer}>
                        <a href="/contact">
                        <Rounded  backgroundColor={"#334BD3"} className={styles.button}>
                            <p>Back to contact</p>
                        </Rounded>
                        </a>
                    </motion.div>
                    <motion.svg style={{rotate, scale: 2}} width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z" fill="white"/>
                    </motion.svg>
                </div>
                
                <div className={styles.info}>
                    <div>
                        <span>
                            <h3>Version</h3>
                            <p>2023 © Edition</p>
                        </span>
                        <span>
                            <h3>Local Time</h3>
                            <p>{localTime} EST</p>
                        </span>
                    </div>
                    <div>
                        <span>
                            <h3>Socials</h3>
                            <a href="https://www.linkedin.com/in/elvischiqui/">
                            <Magnetic>
                                <p>LinkedIn</p>
                            </Magnetic>
                        </a>
                        </span>
                        <a href="https://github.com/elvisc589">
                        <Magnetic>
                            <p>Github</p>
                        </Magnetic>
                        </a>
                   
                    </div>
                </div>
            </div>
        </div>
    )
}