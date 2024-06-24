import styles from "./home.module.css"
import { Icon } from "@/app/_components"

export default function WorkHourAnalysis() {
  return (
    <div className={styles.root}>
      <div>
        <div>
          <Icon type="time-fill" size={40} />
          <div>
            <span>TOTAL WORK</span>
            <span>38 hours ∙ 12 mins</span>
          </div>
        </div>
      </div>
      <div>bb</div>
    </div>
  )
}
