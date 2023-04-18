import styles from '../styles/Lehrgangs_ues.module.css'
import type { NextPage } from 'next'
import { useAppSelector } from '../redux/hooks'
import React, { useEffect} from "react"


const Ebene_2: NextPage = () => {

    // an wheelScaale angepasster EElement-scalee für Ebene_1
    const ajustedScale = useAppSelector((state) => state.wheelScale.value) - 0.5

    useEffect(() => {

        const ebene_1_el: HTMLCollection  = document.getElementsByClassName('ebene_1')
        
            // calculate scroll direction and apply zoom effectlogic 
            function onScroll (event: WheelEvent, elements: HTMLCollection ) {

            event.preventDefault();
            // Apply scale transform
            Array.from(elements).forEach(element => {
            element.setAttribute('styles', `scale: ${ajustedScale}; outline: solid green 2px; color: green;`)
            });

        }

        window.addEventListener("wheel", function(e){
            onScroll(e, ebene_1_el)
        })

    }, []);

    return (
            <>
                <div className={`${styles.ebene_1} ebene_1`} id='ebene_1' style={{
                    transition: "transform 1000ms ease-in-out",
                    scale: `${ajustedScale}`,
                }}>
                <p>Ebene 1: Jahr 1</p>
                </div>

                <div className={`${styles.ebene_1} ebene_1`} id='ebene_1' style={{
                    transition: "transform 1000ms ease-in-out",
                    scale: `${ajustedScale}`,
                }}>
                <p>Ebene 1: Jahr 2</p>
                </div>
            </>
    )
}

export default  Ebene_2