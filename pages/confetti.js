import Head from 'next/head'
import styles from '../styles/Confetti.module.css'
import confetti from 'canvas-confetti';
import { useEffect } from 'react';

export default function Confetti() {
  useEffect(() => {
    confetti();
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>imti | Confetti</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Confetti</h1>
        <p className={styles.description}>Using the canvas-confetti package</p>
        <button className={styles.button} onClick={() => confetti()}>
          Again 🎉
        </button>
      </main>
    </div>
  );
}