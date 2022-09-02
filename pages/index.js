import Head from 'next/head';
import { HomePage, ServicesPage, Footer, SplashPage, AboutPage, ContactPage } from '../widgets';

export default function Home() {
  return (
    <div>
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
    </div>
  )
}
