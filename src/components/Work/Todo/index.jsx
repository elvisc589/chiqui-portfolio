'use client';
import styles from './style.module.scss'
import { slideUp } from './animation';
import { useRef } from 'react';
import { useInView, motion } from 'framer-motion';
import gsap from 'gsap';
import Image from 'next/image';



export default function Todo() {
  const phrase = "The To-do app is a full-stack web application that allows users to retrieve, create, update, and delete tasks in real time. At its core, this application is built to enhance productivity and task organization for users. The backend was implemented with Node.js, Express, AWS, and MongoDB for data storage. The frontend uses traditional CSS and JavaScript.";
  const description = useRef(null);
  const isInView = useInView(description)

  return (
  <main className={styles.projects}>
    <div className={styles.body}>
      <div className={styles.title}>
          <h2>To-Do App</h2>
          <div className={styles.buttonContainer}>
          <a href="https://github.com/elvisc589/todoapp">
          <button  backgroundColor={"#334BD3"} className={styles.button}>
                            <p>Source Code</p>
                        </button>
                        </a>
          <a href="https://erc-todoapp.netlify.app">
          <button backgroundColor={"#334BD3"} className={styles.button}>
                            <p>Demo</p>
                        </button>
                        </a>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image 
        src="/images/todoapp.png"
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