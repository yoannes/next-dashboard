import styles from "./page.module.css"
import { Home as HomeComponent } from "@/app/_components"

export default function Home() {
  return (
    <main className={styles.main}>
      <HomeComponent />
    </main>
  )
}
