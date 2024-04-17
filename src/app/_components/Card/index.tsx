import styles from "./styles.module.css"

interface Props {
  children?: React.ReactNode
}

export default function Card({ children }: Props) {
  return <div className={styles.root}>{children}</div>
}
