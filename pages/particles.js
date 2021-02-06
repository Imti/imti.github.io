import Head from 'next/head';
import { useEffect } from 'react';
import App from '../webgl/App';

export default function Particles() {
  
  useEffect(() => {
    const app = new App();
    app.init();
  }, []);

  return (
    <div className="container dark-bg">
      <Head>
        <title>imti | particles</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
} 