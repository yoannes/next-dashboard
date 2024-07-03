"use client"
import { Icon } from "@/app/_components"
import styles from "./index.module.scss"
import { className } from "@/app/utils"
import { TasksList } from "./_components"
import { Task } from "@/app/types"
import dayjs from "dayjs"
import { useEffect, useState } from "react"

const tasks: Task[] = [
  {
    id: "1",
    name: "Ingate App Design",
    startedAt: dayjs().subtract(3, "hour").unix(),
    endedAt: dayjs().subtract(2, "hour").unix() - 2,
    breaks: [],
  },
  {
    id: "2",
    name: "Backend API",
    startedAt: dayjs().subtract(2, "hour").unix(),
    endedAt: dayjs().subtract(1, "hour").unix() - 10,
    breaks: [],
  },
  {
    id: "3",
    name: "Frontend development",
    startedAt: dayjs().subtract(1, "hour").unix(),
    breaks: [],
  },
]

export default function TimeTracker() {
  const [now, setNow] = useState(dayjs())

  const openTask = tasks.find((task) => !task.endedAt)
  const status = openTask ? "in progress" : "in break"
  const startedAt = openTask ? dayjs.unix(openTask.startedAt) : null
  const diff = dayjs.unix(startedAt ? now.diff(startedAt, "second") : 0).utc()

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(dayjs())
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <div className={styles.root}>
      <div className={styles.card}>
        <div className={styles.cardHeader}>Ingate App Design</div>
        <div className={styles.cardBody}>
          <div className={className("xx-small", styles.bodyStatus)}>{status}</div>
          <div className="h3-title">
            {diff.format("HH:mm")}
            <span style={{ color: "#868C98" }}>{diff.format(":ss")}</span>
          </div>
          <div className={className("x-small", styles.btn)}>
            <Icon type={openTask ? "pause-circle" : "play-fill"} />
            <span>{openTask ? "Stop Time Tracker" : "Start Time Tracker"}</span>
          </div>
        </div>
      </div>

      <div>
        <div className={className("xx-small", styles.bodyStatus)}>Previous tasks</div>
        <div className="flex column gap-4">
          <TasksList items={tasks} />
        </div>
      </div>
    </div>
  )
}
