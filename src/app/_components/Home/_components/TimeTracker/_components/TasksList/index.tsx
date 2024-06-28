"use client"
import { Button, Icon } from "@/app/_components"
import styles from "./index.module.scss"
import { className } from "@/app/utils"
import { Task } from "@/app/types"

interface Props {
  items: Task[]
}

export default function TasksList(props: Props) {
  return <div className={styles.root}>list</div>
}
