import Head from 'next/head';
import { HomePage, ServicesPage, Footer, SplashPage, AboutPage, ContactPage } from '../widgets';

export default function Home() {
  return (
    <div
      className='home'
    >
      <Head>
        <title>John Smith CPA</title>
        <meta name="description" content="Accounting" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SplashPage/>
      <HomePage/>
      <ServicesPage/>
      <AboutPage/>
      <ContactPage/>
      <Footer/>
      <style jsx>{`
        .home {
          width: 100%;
          display: flex;
          flex-flow: column wrap;
          align-items: center;
          transition: all .2s;
        }

        @media (min-width: 576px) {
          .home {
            width: 90%;
          }
        }

      `}</style>
    </div>
  )
}
