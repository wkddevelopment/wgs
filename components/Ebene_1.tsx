import styles from '../styles/Lehrgangs_ues.module.css'
import type { NextPage } from 'next'
import { useAppSelector } from '../redux/hooks'
import React, { useEffect } from "react"

const Ebene_1: NextPage = () => {

  const wheelScaleValue = useAppSelector((state) => state.wheelScale.value)

  useEffect(() => {

    const ebene_0_el: HTMLElement = document.querySelector('#ebene_0') 
    
      // calculate scroll direction and apply zoom effectlogic 
      function onScroll (event: WheelEvent, element: HTMLElement ) {

        event.preventDefault();
        // Apply scale transform
        element.style.scale  = `${wheelScaleValue}`
        
      }

    window.addEventListener("wheel", function(e){
      onScroll(e, ebene_0_el)
    })

  }, []);

  return (
            <>
              <div className={`${styles.ebene_0} ebene_0`} id='ebene_0' style={{
                  transition: "transform 1000ms ease-in-out",
                  scale: `${wheelScaleValue}`,
                }}>
                <p>Ebene 0: Lehrgangsübersicht</p>
              </div>
            </>
        )
}

export default  Ebene_1