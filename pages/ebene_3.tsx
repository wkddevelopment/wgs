import styles from '../styles/Lehrgangs_ues.module.css'
import Link from 'next/link'
import type { NextPage } from 'next'
import React, { useEffect} from "react"
import { useAppSelector, useAppDispatch } from '../redux/hooks'
import { setValue } from '../redux/jahrgangSlice'
import { increment } from '../redux/ebenenSlice'
import { EbenenBtn } from '../components/EbenenBtn'



const Ebene_3: NextPage = () => {

    const jahrgang = useAppSelector((state) => state.jahrgang.value)
    const ebene = useAppSelector((state) => state.ebene.value)
    const dispatch = useAppDispatch()
    console.log(`Ebene 2, Ebenenvalue: ${ebene}`)

    return (
            <>
                <div className={`${styles.ebene_1_container}`}>


                    <div className={`${styles.ebene_1} ${styles.ebene_1_1} ebene_1`} id='ebene_1'>
                    <p>Ebene 1: Jahr 1</p>
                    </div>

                    <div className={`${styles.ebene_1} ${styles.ebene_1_2}  ebene_1`} id='ebene_1'>
                    <p>Ebene 1: Jahr 2</p>
                    </div>

                </div>


          <Link href={{
                    pathname: './ebene_2',
                    query: {jahrgang: `${jahrgang}`}
                    }}
            ><input type="button" value={'Vorige Ebene'} id='ebenenBtn' />
            </Link>

            </>
    )
}

export default  Ebene_3