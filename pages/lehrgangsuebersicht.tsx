import styles from '../styles/Lehrgangs_ues.module.css'
import Link from 'next/link'

import type { NextPage } from 'next'
import { useAppSelector, useAppDispatch } from '../redux/hooks'
import { useEffect } from "react"
import { increment } from '../redux/ebenenSlice'


const LehrgangsUES: NextPage = () => {

  const jahrgang = useAppSelector((state) => state.jahrgang.value)
  const ebene = useAppSelector((state) => state.ebene.value)
  const dispatch = useAppDispatch()
  console.log(`LUE, Ebenenvalue: ${ebene}`)

//                                                +++ scroll effect +++

  // useEffect(() => {

  //   const ebene_0_el: HTMLElement = document.querySelector('#ebene_0') 
    
  //     // calculate scroll direction and apply logic 
  //     function onScroll (event: WheelEvent, element: HTMLElement ) {

  //     event.preventDefault();

  //     // if wheelScroll down...
  //     if(event.deltaY < 0){
  //       // ...constrain scale to at least 1.0 (default value to prevent the element for getting to small)
  //         dispatch({ type: 'wheelScale/increment', payload: 0.1 })
  //     // if wheelScroll up
  //     } else {
  //         dispatch({ type: 'wheelScale/decrement', payload: - 0.1 })
  //     }

  //   }

  //   window.addEventListener("wheel", function(e){
  //     onScroll(e, ebene_0_el)
  //   })

  // }, []);

  return (

    <>
      <div className={styles.lehrgangsUES_container}>
          <h1>Jahrgang {jahrgang}</h1>
          <p>Lehrgangsübersicht</p>

          <Link href={{
                    pathname: './ebene_2',
                    query: {jahrgang: `${jahrgang}`}
                    }}
            >
          <input type="button" value={'Nächste Ebene'} id='ebenenBtn' /></Link>
          <Link href={{
                    pathname: './',
                    query: {jahrgang: `${jahrgang}`}
                    }}
            ><input type="button" value={'Vorige Ebene'} id='ebenenBtn' />
            </Link>

      </div>
    </>
  )

};

export default LehrgangsUES