import styles from '../styles/Lehrgangs_ues.module.css'
import Link from 'next/link'
import type { NextPage } from 'next'
import React, { useEffect } from "react"
import { useAppSelector, useAppDispatch } from '../redux/hooks'
import { setValue } from '../redux/jahrgangSlice'
import { increment } from '../redux/ebenenSlice'
import { EbenenBtn } from '../components/EbenenBtn'

const Ebene_2: NextPage = () => {

  const jahrgang = useAppSelector((state) => state.jahrgang.value)
  const ebene = useAppSelector((state) => state.ebene.value)
  const dispatch = useAppDispatch()
  console.log(`Ebene 1, Ebenenvalue: ${ebene}`)


  return (
            <>
              <div className={`${styles.ebene_0} ebene_0`} id='ebene_0' >
                <p>Ebene 2</p>

                <Link href={{
                    pathname: './ebene_3',
                    query: {jahrgang: `${jahrgang}`}
                    }}
            >
          <input type="button" value={'Nächste Ebene'} id='ebenenBtn' /></Link>
          <Link href={{
                    pathname: './lehrgangsuebersicht',
                    query: {jahrgang: `${jahrgang}`}
                    }}
            ><input type="button" value={'Vorige Ebene'} id='ebenenBtn' />
            </Link>

              </div>
            </>
        )
}

export default  Ebene_2