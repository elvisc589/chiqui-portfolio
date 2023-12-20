'use client';
import styles from './style.module.scss'
import { slideUp } from './animation';
import { useRef } from 'react';
import { useInView, motion} from 'framer-motion';
import gsap from 'gsap';
import Image from 'next/image';



export default function UNC_LUL() {
  const phrase = "I developed this website for UNC LUL, an organization at UNC dedicated to uplifting the community and providing minority students with resources to higher education. Furthermore, I implemented a custom chatbot built with LangChain and OpenAI API's through Python FastAPI routes. This website provides users with information about the organzation, events, and how to get involved.";
  const description = useRef(null);
  const isInView = useInView(description)

  return (
  <main className={styles.projects}>
    <div className={styles.body}>
      <div className={styles.title}>
          <h2>UNC LUL</h2>
          <div className={styles.buttonContainer}>
          <a href="https://github.com/elvisc589/unclulwebsite">
          <button  backgroundColor={"#334BD3"} className={styles.button}>
                            <p>Source Code</p>
                        </button>
                        </a>
          <a href="https://unclul.netlify.app">
          <button backgroundColor={"#334BD3"} className={styles.button}>
                            <p>Demo</p>
                        </button>
                        </a>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image 
        src="/images/unclul.png"
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