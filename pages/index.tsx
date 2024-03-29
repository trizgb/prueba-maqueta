/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next';
import Head from 'next/head';
import AnimatedText from '../components/AnimatedText';
import Button from '../components/Button';
import Header from '../components/Header';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Redradix</title>
        <meta name='description' content='Generated by create next app' />
      </Head>

      <Header />
      <main className={styles.main}>
        {/* <div className='desktopII' /> */}
        <section className='hero'>
          <div className='hero__image-container'>
            <div className='desktopIV'>
              <div id='drop-1' className='drop' />
              <div id='drop-2' className='drop' />
              <div id='drop-3' className='drop' />
              <div id='drop-4' className='drop' />
            </div>
            <img
              className='hero__image'
              src='/assets/images/hero-banner.webp'
              width='100%'
              alt=''
            />
          </div>
          <div className='hero__wrapper'>
            <AnimatedText words={['cualidad', 'servicio']} />
            <ul className='hero__subtitle'>
              <li>Diseño de experiencia de usuario</li>
              <li>Maquetación y diseño responsive</li>
              <li>Desarrollo por sprints</li>
            </ul>
            <div>
              <Button onClick={() => alert('👩🏼‍💻🟢')}>Empezar</Button>
              <Button variant='secondary' href=''>
                Contacto
              </Button>
            </div>
          </div>
        </section>
      </main>
      {/* <footer className={styles.footer}></footer> */}
    </>
  );
};

export default Home;

// Escribir README
// Revisar
