import '../styles/globals.css';
import Head from 'next/head';
import type { AppProps } from 'next/app';

function App({ Component, pageProps }: AppProps) {
  
  return (
      <>
        <Head>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <meta name='author' content='Stefan Bartl (wkd-development)' />
          <meta name='description' content='Ein Online-Lehrplan-Builder zur Einteilung von Unterrichtseinheiten und Trainer: innen.' />
          <link rel='icon' sizes='16x16' href='/public/wgs__medien/gs_logo.jpeg' />
          <link rel='apple-touch-icon' sizes='120x120' href='/public/wgs__medien/gs_logo.jpeg' />
        </Head>
        
        <div className='app-container'>

          <Component {...pageProps} />
          
        </div>

      </>
  ) 

}

export default App