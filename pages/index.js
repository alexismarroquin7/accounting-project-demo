import Head from 'next/head';
import { HomePage, ServicesPage, Footer, SplashPage } from '../widgets';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Accounting</title>
        <meta name="description" content="Accounting" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SplashPage/>
      <HomePage/>
      <ServicesPage/>
      <Footer/>
    </div>
  )
}
