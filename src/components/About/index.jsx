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
            👋 Hey there! I'm a fourth-year student at UNC Chapel Hill and a proud first-generation college student. My roots trace back to Ecuadorian immigrants, an inspiration for my passion for innovation and hard work.

 </p>
            <p>
            My coding journey began in 2016 during my high school freshman year, diving into the world of C++. Since then, I've been been hooked, constantly learning and turning ideas into reality.

            </p>
            <p>
            I've crafted my skills through a diverse range of projects, spanning personal, academic, and commerical landscapes. I am experienced in full-stack development, leveraging a spectrum of programming languages:
            </p>
            <p>
            JavaScript, TypeScript, Python, Java, C, SQL, HTML/CSS, SCSS, XML
            </p>
            <p>
            My toolkit includes an array of powerful tools and frameworks:
            </p>
            <p>
            React, NextJS, Angular, Framer Motion, Tailwind CSS, FastAPI, Node.js, GitHub, Docker, SQLAlchemy, JUnit, Maven, MongoDB, Docker, NumPy, Pandas, Caddy, SourceTree, Matplotlib, Express, SQLite, AWS, PyTest, JavaFX, Flask, Postman, Kubernetes, OpenShift, ORM, Pydantic, MySQL, PostgreSQL, Vue, Gradle, and more
            </p>
            <p>
            I'm passionate about developing meaningful solutions and look forward to the journey ahead, constantly improving my personal, professional, and technical skills. 🚀
            </p>
            
          </div>
          <div className={styles.imageContainer}>
            <Image src={'/images/gradelvis.jpg'} width={500} height={500} className={styles.profileImage} />
          </div>
        </div>
      </div>
    </div>
  );
}
