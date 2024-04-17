"use client"
import Image from "next/image"
import styles from "./index.module.css"
import { Icon } from "@/app/_components"
import { IconType } from "@/app/_components/Icon/types"
import { usePathname, useRouter } from "next/navigation"

interface Props {}

const menuItems: { path: string; name: string; icon: IconType }[] = [
  { path: "/", name: "Home", icon: "home" },
  { path: "/atom", name: "Atom", icon: "atom" },
  { path: "/calendar", name: "Calendar", icon: "calendar" },
  { path: "/files", name: "Files", icon: "file" },
  { path: "/awards", name: "Awards", icon: "award" },
]

export default function SideMenu(props: Readonly<Props>) {
  const pathname = usePathname()
  const router = useRouter()

  const clickHandler = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    router.push(e.currentTarget.href, { scroll: false })
  }

  return (
    <div className={styles.root}>
      <div className={styles.logoContainer}>
        <Image src="/logo.svg" alt="Logo" width={25} height={26} />
      </div>

      <div className={styles.menuItemContainer}>
        {menuItems.map((item) => {
          return (
            <a key={item.path} href={item.path} className={styles.menuItem} onClick={clickHandler}>
              <Icon
                type={item.icon}
                size={24}
                className={pathname === item.path ? styles.active : undefined}
              />
            </a>
          )
        })}
      </div>
    </div>
  )
}
