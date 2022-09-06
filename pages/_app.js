import { Nav } from '../widgets';

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className='App'>
      <Nav/>
      <Component {...pageProps} />
      <style jsx>{`
        .App {
          width: 100%;
          display: flex;
          flex-flow: column wrap;
          align-items: center;
        }
      `}</style>
    </div>
  )
}

export default MyApp;