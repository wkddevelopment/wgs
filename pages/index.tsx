import { useState } from 'react'
import styles from '../styles/Home.module.css'
import type { NextPage } from 'next'
import Link from 'next/link'
import { useAppSelector, useAppDispatch } from '../redux/hooks'
import { increment, decrement, incrementByAmount, setValue } from '../redux/jahrgangSlice'


const Home: NextPage = () => {

  const jahrgang = useAppSelector((state) => state.jahrgang.value)
  const dispatch = useAppDispatch()

  return (
      <>
        <div className={styles.home_container}>
          <h1>WGS Curriculum Builder v1.0.0</h1>
          <div className={styles.auswahl}>
            <label>Wähle Jahrgang:<input type='number' id='input_jahrgang' value={jahrgang} defaultValue={jahrgang} onChange={ e => { dispatch(setValue( Number(e.target.value))) } } min={'73'} /> </label>
            <Link href={{
                    pathname: './lehrgangsuebersicht',
                    query: {jahrgang: `${jahrgang}`}
                    }}
            ><input type="button" value={'Zum Lehrgang'} /></Link>
          </div>
        </div>       
      </>
  ) 

};

export default Home