'use client';
import styles from './style.module.scss'
import { slideUp } from './animation';
import { useRef } from 'react';
import { useInView, motion } from 'framer-motion';
import Image from 'next/image';



export default function FlowPaintLLC() {
  const phrase = "Flow Paint LLC, a professional painting business based in Burlington, NC, lacked an online presence until I developed a website to enhance their visibility and facilitate online lead generation. Through this website, I aimed to establish their digital footprint and provide a platform for potential customers to explore their services. This website was developed with ReactJS and Tailwind CSS and showcases reviews, photos of work, information about the company, and a contact form to request services or more information";
  const description = useRef(null);
  const isInView = useInView(description)

  return (
  <main className={styles.projects}>
    <div className={styles.body}>
      <div className={styles.title}>
          <h2>Flow Paint LLC</h2>
          <div className={styles.buttonContainer}>
          <a href="https://github.com/elvisc589/atailwindwebsite">
          <button  backgroundColor={"#334BD3"} className={styles.button}>
                            <p>Source Code</p>
                        </button>
                        </a>
          <a href="https://flowpaintllc.com">
          <button backgroundColor={"#334BD3"} className={styles.button}>
                            <p>Demo</p>
                        </button>
                        </a>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image 
        src="/images/flowpaintllc.png"
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