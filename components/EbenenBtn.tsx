import styles from '../styles/Lehrgangs_ues.module.css'
import React, { useEffect } from "react"
import { useAppSelector, useAppDispatch } from '../redux/hooks'
import { increment, decrement } from '../redux/ebenenSlice'

interface DispatchType {
    type: string
}

export const EbenenBtn = (props: DispatchType) => {

  const ebene = useAppSelector((state) => state.ebene.value)
  const dispatch = useAppDispatch()

  useEffect(()=>{

    const button1 = document.getElementById('btn_+')
    const button2 = document.getElementById('btn_-')

    button1.addEventListener("click", function(){
            dispatch({ type: 'ebene/increment'})
      console.log(ebene)
    })

    button2.addEventListener("click", function(){
            dispatch({ type: 'ebene/decrement'})
        console.log(ebene)
      })

  }, [])

  return (
            <>
                <input type="button" value={props.type === 'increment' ? `zur nächsten Ebene`: `zur vorigen Ebene`} id={props.type === 'increment' ? 'btn_+' : 'btn_-'} className={`${styles.ebenenBtn}`} />
            </>
        )
        
}