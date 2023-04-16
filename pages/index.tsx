import styles from '../styles/Home.module.css';
import type { NextPage } from 'next'
import Head from 'next/head';


const Home: NextPage = () => {

  return (
      <>
        <Head>
            <title>WGS Curriculum Builder v1.0.0</title>
        </Head>

        <div className={styles.home_container}>
          <h1>Hi, Stefan!</h1>
        </div>       

      </>
  ) 

};

export default Home