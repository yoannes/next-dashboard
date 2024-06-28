"use client"
import { useState } from "react"
import styles from "./index.module.css"
import { ButtonGroup, Icon } from "@/app/_components"
import { className } from "@/app/utils"

const TOTAL_WORK = 38.2

export default function WorkHourAnalysis() {
  const [period, setPeriod] = useState(5)

  const hours = Math.floor(TOTAL_WORK)
  const minutes = Math.round((TOTAL_WORK - hours) * 60)
  const periodItems = [
    { label: "5D", value: 5 },
    { label: "2W", value: 14 },
    { label: "1M", value: 30 },
    { label: "6M", value: 180 },
    { label: "1Y", value: 365 },
  ]

  return (
    <div className={styles.root}>
      <div>
        <div className={styles.header}>
          <Icon type="time-fill" size={40} />
          <div>
            <div className={styles.title}>TOTAL WORK</div>
            <div className={styles.titleValue}>
              {hours} hours ∙ {minutes} mins
            </div>
          </div>
        </div>
      </div>

      <div>
        <ButtonGroup
          value={period}
          items={periodItems}
          onClick={(v) => setPeriod(Number(v.value))}
        />

        <div className={styles.emptyStateContainer}>
          <div style={{ width: "fit-content" }}>
            <Icon type="empty-state-illustration" size={80} />
          </div>

          <div className={className("small", "t-center", styles.emptyText)}>
            <div>No records of work hours yet.</div>
            <div>Please check back later.</div>
          </div>
        </div>
      </div>
    </div>
  )
}
