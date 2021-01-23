import Head from 'next/head'
import styles from '../styles/Confetti.module.css'
import confetti from 'canvas-confetti';
import { useEffect } from 'react';

export default function Confetti() {
  useEffect(() => {
    confetti();
  }, []);

  return (
    <div className="container">
      <Head>
        <title>imti | confetti</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="main">
        <h1 className="title">confetti</h1>
        <p className="description">using canvas-confetti package</p>
        <button className={styles.button} onClick={() => confetti()}>
          Again 🎉
        </button>
      </main>
    </div>
  );
}