import Image from 'next/image'
import styles from './page.module.css'
import { Landing } from '@/features/Landing/landing'

export default function Home() {
  return (
    <main>
      <Landing />
    </main>
  )
}
