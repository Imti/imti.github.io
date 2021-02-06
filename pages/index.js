import Head from 'next/head'
import styles from '../styles/Home.module.css'
import confetti from 'canvas-confetti';
import { useEffect } from 'react';
import { Fade } from 'react-reveal';

export default function Home() {
  useEffect(() => {
    setTimeout(confetti, 800);
  }, []);

  return (
    <div className="container">
      <Head>
        <title>imti</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <Fade bottom duration={600}>
          <h1 className="title">imti</h1>
        </Fade>
        <Fade bottom delay={200} duration={600}>
          <p className="description">experiments with code</p>
        </Fade>
        <div className={styles.separator}>
          <svg
            preserveAspectRatio="xMaxYMax"
            width="1440"
            height="205"
            viewBox="0 0 1440 70"
          >
            <path d="M456.464 0.0433865C277.158 -1.70575 0 50.0141 0 50.0141V74H1440V50.0141C1440 50.0141 1320.4 31.1925 1243.09 27.0276C1099.33 19.2816 1019.08 53.1981 875.138 50.0141C710.527 46.3727 621.108 1.64949 456.464 0.0433865Z"></path>
            <text className={styles.bikeEmoji}>
              🚴‍♂️
              <animateMotion
                dur="10s"
                repeatCount="indefinite"
                path="M456.464 0.0433865C277.158 -1.70575 0 50.0141 0 50.0141V74H1440V50.0141C1440 50.0141 1320.4 31.1925 1243.09 27.0276C1099.33 19.2816 1019.08 53.1981 875.138 50.0141C710.527 46.3727 621.108 1.64949 456.464 0.0433865Z"
              />
            </text>
          </svg>
        </div>

        <Fade bottom cascade delay={200} duration={600}>
          <div className="grid">
            <a href="/confetti" className="card">
              <h3>confetti &rarr;</h3>
              <p>using canvas-confetti package</p>
            </a>
            <a href="/color-blending" className="card">
              <h3>color blending &rarr;</h3>
              <p>using svg + mix blend mode</p>
            </a>
            <a href="/clock" className="card">
              <h3>clock &rarr;</h3>
              <p>using svg + d3</p>
            </a>
            <a href="/particles" className="card">
              <h3>particles &rarr;</h3>
              <p>image + threejs</p>
            </a>
          </div>
        </Fade>
      </main>
    </div>
  );
}
