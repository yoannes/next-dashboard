import { Button } from "@/app/_components"
import styles from "./home.module.css"

export default function HomeHeader() {
  const name = "Bruno"

  return (
    <div className={styles.root}>
      <div>
        <div className={styles.title}>Welcome back, {name}</div>
        <div className={styles.subTitle}>Last updated at 8:30 AM</div>
      </div>
      <div>
        <Button variant="outline" prefix="filter-lines">
          Filters
        </Button>
      </div>
    </div>
  )
}
