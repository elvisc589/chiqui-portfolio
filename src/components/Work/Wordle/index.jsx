'use client';
import styles from './style.module.scss'
import { slideUp } from './animation';
import { useRef } from 'react';
import { useInView, motion } from 'framer-motion';
import Image from 'next/image';


export default function Wordle_Clone() {
  const phrase = "The wordle clone implements the mechanics of the popular game, challenging users to guess a secret 5-letter word with a limited number of attempts. To ensure an engaging experience accross various devices, the application integrates the 'simple-keyboard', catering specifically to mobile users. This clone sourced 5757 unique 5-letter words from the Standford GraphBase, a public domain source, ensuring a fresh and engaging experience with each session.";
  const description = useRef(null);
  const isInView = useInView(description)

  return (
  <main className={styles.projects}>
    <div className={styles.body}>
      <div className={styles.title}>
          <h2>Wordle Clone</h2>
          <div className={styles.buttonContainer}>
          <a href="https://github.com/elvisc589/wordle-clone">
          <button  backgroundColor={"#334BD3"} className={styles.button}>
                            <p>Source Code</p>
                        </button>
                        </a>
          <a href="https://chiqui-wordleclone.netlify.app">
          <button backgroundColor={"#334BD3"} className={styles.button}>
                            <p>Demo</p>
                        </button>
                        </a>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image 
        src="/images/wordle.png"
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