import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Orkun Alp Ünlü</title>
        <meta name="description" content="Portfolio of Orkun Alp Ünlü" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={[styles.title,styles.card]}>
          Welcome to my portfolio
          <Image className={styles.profile} src="/profile.jpg" alt="profile photo" width={100} height={100}/>
        </h1>

        <p className={styles.description}>
          I am a proficient at some job currently working at some company.<br/>
          Looking for new opportunities to improve myself.
        </p>

        <div className={styles.grid}>
          <a href="/aboutme" className={styles.card}>
            <h2>About Me &rarr;</h2>
          </a>

          <a href="/education" className={styles.card}>
            <h2>Education &rarr;</h2>
          </a>

          <a href="/experiences" className={styles.card}>
            <h2>Experiences &rarr;</h2>
          </a>

          <a href="/projects" className={styles.card}>
            <h2>Projects &rarr;</h2>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          Connect me on other platforms{' '}
          <span className={styles.logo}>
            <Image src="/social.ico" alt="Social Media Icon" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
