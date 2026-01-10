import React from 'react'
import styles from './Principal.module.css'
import Banner from '../../components/banner/Banner'
import Section1 from '../../components/section1/Section1'

export default function Principal() {
 return (
  <>
  <div className={styles.main}>
   <Banner/>
   <Section1/>
  </div>
  </>
 )
}
