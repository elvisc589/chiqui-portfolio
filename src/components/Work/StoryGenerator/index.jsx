'use client';
import styles from './style.module.scss'
import { slideUp } from './animation';
import { useRef } from 'react';
import { useInView, motion } from 'framer-motion';
import Image from 'next/image';

export default function StoryGenerator() {
  const phrase = "Story Generator is an Android application designed to empower users in creating custom stories using Artifical Intelligence. This app allows users the ability to draw sketches or capture photos using their device's camera and save them in a SQLite database, along with essential metadata like timestamps, dates, and a set of tags for easy categorization. Google's Cloud Vision API is used to automatically generate relevant tags for the images and sketches. Then the user can select saved images and/or sketches and send their assocaited tags to TextCortexLLM's API to generate a story and have it read aloud by an instance of Java's TextToSpeech class.";
  const description = useRef(null);
  const isInView = useInView(description)

  
  return (
  <main className={styles.projects}>
    <div className={styles.body}>
      <div className={styles.title}>
          <h2>Story Generator</h2>
          <div className={styles.buttonContainer}>
          <a href="https://github.com/elvisc589/story_generator_app">
          <button  backgroundColor={"#334BD3"} className={styles.button}>
                            <p>Source Code</p>
                        </button>
                        </a>
          <a href="https://www.youtube.com/watch?v=AOmtpDd9v34">
          <button backgroundColor={"#334BD3"} className={styles.button}>
                            <p>Demo</p>
                        </button>
                        </a>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image 
        src="/images/app.jpg"
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