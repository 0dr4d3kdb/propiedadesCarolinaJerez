import React from 'react'
import styles from './Principal.module.css'
import Banner from '../../organisms/banner/Banner'
import Section1 from '../../organisms/section1/Section1'

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
