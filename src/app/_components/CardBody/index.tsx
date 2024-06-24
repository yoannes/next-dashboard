import { className } from "@/app/utils"
import styles from "./styles.module.css"

interface Props {
  children?: React.ReactNode
}

export default function CardBody({ children }: Props) {
  return <div className={className(styles.root)}>{children}</div>
}
