import Image from 'next/image';
import styles from './style.module.scss';

export default function Home() {

  return (
    <div className={styles.about}>
      <div className={styles.body}>
        <div className={styles.title}>
          <h2>Dedicated to personal growth and development</h2>
        </div>
        <div className={styles.columns}>
          <div className={styles.info}>
            <p>
            Hey there! 👋 I am a fourth-year student at UNC Chapel Hill, a first-gen college student. 
            </p>
            <p>
            My parents
              are Ecuadorian immigrants

            </p>
            <p>
            my coding journey began back in 2016 during my freshman
              year of high school with C++
            </p>
            <p>
            Since then, I've been passionate about learning and
              bringing ideas to life.
            </p>
            I've honed my skills by crafting personal, academic, and
              business-oriented projects.
          </div>
          <div className={styles.imageContainer}>
            <Image src={'/images/gradelvis.jpg'} width={325} height={500} className={styles.profileImage} />
          </div>
        </div>
      </div>
    </div>
  );
}
