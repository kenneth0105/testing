import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Manu from '../components/manu_bar'
import Submanu from '../components/sub_manu'
import styles from '../components/manu.module.css'




const Home: NextPage = () => {
  return (
        
            <div className={styles.body1}>
              <ul>
                <li>
                  <Manu/>
                  <Submanu/>
                </li>
              </ul>
            </div>
          
  )
}

export default Home
