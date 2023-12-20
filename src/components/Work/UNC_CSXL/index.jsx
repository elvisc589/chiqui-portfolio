'use client';
import styles from './style.module.scss'
import { useRef } from 'react';
import { useInView, motion } from 'framer-motion';
import { slideUp } from './animation';
import Image from 'next/image';


export default function UNC_CSXL() {
  const phrase = "The official UNC CSXL website lacked interactions between students. The friendship system is a digital solution, that allows students to view when their friends are currently checked in at the csxl so that they could join in on a study session, use it as a convenient meeting spot for a group project, or brief socialization.";
  const description = useRef(null);
  const isInView = useInView(description)

  return (
  <main className={styles.projects}>
    <div className={styles.body}>
      <div className={styles.title}>
          <h2>UNC CSXL</h2>
          <div className={styles.buttonContainer}>
          <a href="https://github.com/comp423-23f/csxl-final-team-a4">
          <button  backgroundColor={"#334BD3"} className={styles.button}>
                            <p>Source Code</p>
                        </button>
                        </a>
          <a href="https://youtu.be/e7wj2nqv1sc">
          <button backgroundColor={"#334BD3"} className={styles.button}>
                            <p>Demo</p>
                        </button>
                        </a>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image 
        src="/images/unccsxl.png"
        width={900}
        height={525}
        />
      </div>
      
      <p ref={description}>
                {
                    phrase.split(" ").map( (word, index) => {
                        return <span key={index} className={styles.mask}><motion.span variants={slideUp} custom={index} animate={isInView ? "open" : "closed"} key={index}>{word}</motion.span></span>
                    })
                }
      </p>
      
    </div>
  </main>
  )
              }