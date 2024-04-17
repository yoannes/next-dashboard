import { Button as RadixButton } from "@radix-ui/themes"
import styles from "./styles.module.css"
import { IconType } from "../Icon/types"
import { Icon } from "@/app/_components"

interface Props {
  variant?: "outline" | "solid"
  prefix?: IconType
  children: React.ReactNode
}

export default function Button({ prefix, variant = "outline", children }: Props) {
  return (
    <RadixButton variant={variant} className={styles.button}>
      {prefix && <Icon type={prefix} size={20} />}
      {children}
    </RadixButton>
  )
}
