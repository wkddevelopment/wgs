import styles from '../styles/Lehrgangs_ues.module.css'
import Ebene_1 from '../components/Ebene_1'
import Ebene_2 from '../components/Ebene_2'

import type { NextPage } from 'next'
import { useAppSelector, useAppDispatch } from '../redux/hooks'
import { useEffect } from "react"

const LehrgangsUES: NextPage = () => {

    const jahrgang = useAppSelector((state) => state.jahrgang.value)
    const wheelScaleValue = useAppSelector((state) => state.wheelScale.value)
    const dispatch = useAppDispatch()

//                                                +++ scroll effect +++

  useEffect(() => {

    const ebene_0_el: HTMLElement = document.querySelector('#ebene_0') 
    
      // calculate scroll direction and apply logic 
      function onScroll (event: WheelEvent, element: HTMLElement ) {

      event.preventDefault();

      // if wheelScroll down...
      if(event.deltaY < 0){
        // ...constrain scale to at least 1.0 (default value to prevent the element for getting to small)
          dispatch({ type: 'wheelScale/increment', payload: 0.1 })
      // if wheelScroll up
      } else {
          dispatch({ type: 'wheelScale/decrement', payload: - 0.1 })
      }

    }

    window.addEventListener("wheel", function(e){
      onScroll(e, ebene_0_el)
    })

  }, []);

  return (

    <>
      <div className={styles.lehrgangsUES_container}>
          <h1>Jahrgang {jahrgang}</h1>
          {wheelScaleValue < 1.5 ? <Ebene_1 /> : <Ebene_2 />}
      </div>
    </>
  )

};

export default LehrgangsUES