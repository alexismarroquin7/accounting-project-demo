import Head from 'next/head';
import { HomePage, ServicesPage } from '../widgets';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Accounting</title>
        <meta name="description" content="Accounting" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage/>
      <ServicesPage/>
    </div>
  )
}
