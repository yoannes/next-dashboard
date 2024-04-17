import { className } from "@/app/utils"
import styles from "./styles.module.css"

interface Props {
  title?: string
  hasDivider?: boolean
  children?: React.ReactNode
}

export default function CardHeader({ title, hasDivider = true, children }: Props) {
  return (
    <div className={className(styles.root, hasDivider && styles.divider)}>
      <div className={styles.title}>{title}</div>
      <div className={styles.actions}>{children}</div>
    </div>
  )
}
