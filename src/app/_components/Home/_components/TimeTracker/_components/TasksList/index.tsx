"use client"
import { Button, Icon } from "@/app/_components"
import styles from "./index.module.scss"
import { className } from "@/app/utils"
import { Task } from "@/app/types"
import dayjs from "dayjs"

interface Props {
  items: Task[]
}

export default function TasksList({ items }: Props) {
  const now = dayjs()

  return items.map((item, i) => {
    const startedAt = dayjs.unix(item.startedAt)
    const endedAt = item.endedAt ? dayjs.unix(item.endedAt) : now
    const diff = dayjs.unix(endedAt.diff(startedAt, "second")).utc()

    return (
      <div key={i} className={styles.root}>
        <div>
          <div className={styles.icon}>
            <Icon type="pause-circle" size={24} />
          </div>
        </div>
        <div>
          <div className={className("small", styles.name)}>{item.name}</div>
          <div className={className("x-small", styles.dur)}>{diff.format("HH:mm:ss")}</div>
        </div>
      </div>
    )
  })
}
