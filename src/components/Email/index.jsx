import styles from './style.module.scss';
import Image from 'next/image';
import Rounded from '../../common/RoundedButton';
import { useRef, useState } from 'react';
import { useScroll, motion, useTransform, useSpring } from 'framer-motion';
import Magnetic from '../../common/Magnetic';


export default function index() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end end"]
    })
    const x = useTransform(scrollYProgress, [0, 1], [0, 100])
    const y = useTransform(scrollYProgress, [0, 1], [-500, 0])
    const rotate = useTransform(scrollYProgress, [0, 1], [120, 90])



    return (
        <div className={styles.contact}>
            <div className={styles.body}>
                <div className={styles.title}>
                    <span>
                        <div className={styles.imageContainer}>
                            <Image 
                            fill={true}
                            alt={"image"}
                            src={`/images/elvis_gray.jpg`}
                            />
                        </div>
                        <h2>Let's work</h2>
                        
                    </span>
                    <h2>together</h2>
                    <form>
                            <div className={styles.form}>
                                <div className={styles.question}>
                                    <label>What's your name?</label>
                                    <input placeholder='John Doe'/>
                                    

                                </div>
                                <div className={styles.question}>
                                    <label >What's your email?</label>
                                    <input placeholder='john@doe.com' required/>
                                    

                                </div>
                                <div className={styles.question}>
                                    <label >What's the name of your organization?</label>
                                    <input placeholder='John Doe LLC' required/>
                
                                </div>

                                <div className={styles.question}>
                                    <label >What services are you looking for?</label>
                                    <input placeholder='Web Design, Web Development ...'/>
                
                                </div>

                                <div className={styles.question}>
                                    <label >Your message</label>
                                    <input placeholder='Hello Elvis, can you help me with ...'/>
                
                                </div>
                            </div>
                        </form>
                    <motion.div style={{x}} className={styles.buttonContainer}>
                        <Rounded  backgroundColor={"#334BD3"} className={styles.button}>
                            <p>Get in touch</p>
                        </Rounded>
                    </motion.div>
                    <motion.svg style={{rotate, scale: 2}} width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z" fill="white"/>
                    </motion.svg>
                </div>
                
                <div className={styles.info}>
                    <div>
                        <span>
                            <h3>Version</h3>
                            <p>2022 © Edition</p>
                        </span>
                        <span>
                            <h3>Version</h3>
                            <p>11:49 PM GMT+2</p>
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