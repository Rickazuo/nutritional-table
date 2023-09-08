import Image from 'next/image'
import styles from './page.module.css'
import DetailsFood from './components/DetailsFood/DetailsFood'

export default function Home() {
  return (
    <main className={styles.main}>
      <DetailsFood />
    </main>
  )
}
