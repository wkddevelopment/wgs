import styles from '../styles/Home.module.css'
import type { NextPage } from 'next'
import Link from 'next/link'
import React, { useEffect } from "react"
import { useAppSelector, useAppDispatch } from '../redux/hooks'
import { setValue } from '../redux/jahrgangSlice'
import { increment } from '../redux/ebenenSlice'

const Home: NextPage = () => {

  const jahrgang = useAppSelector((state) => state.jahrgang.value)
  const ebene = useAppSelector((state) => state.ebene.value)
  const dispatch = useAppDispatch()

  console.log(`Index, Ebenenvalue: ${ebene}`)

  useEffect(()=>{

    const button = document.getElementById('ebenenBtn+')

    function handleEbenenwechsel(e: MouseEvent){
      e.preventDefault()
      dispatch({ type: 'ebene/setValue', payload: 1 })    
    
    }

    button.addEventListener("click", function(e){
      handleEbenenwechsel(e)
    })

  }, [])


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
            ><input type="button" value={'Zum Lehrgang'} id='ebenenBtn+' />
            </Link>

          </div>
        </div>       
      </>
  ) 

};

export default Home