import React from "react"
import * as ToggleGroup from "@radix-ui/react-toggle-group"
import "./styles.css"

interface Item {
  label: string
  value: string | number
}

interface Props {
  value: string | number
  items: Item[]
  onClick: (value: Item) => void
}

export default function ButtonGroup(props: Props) {
  return (
    <ToggleGroup.Root
      value={String(props.value)}
      className="ButtonGroup"
      type="single"
      defaultValue="center"
      onValueChange={(v) => {
        const item = props.items.find((item) => String(item.value) === String(v))
        if (item) props.onClick(item)
      }}
    >
      {props.items.map((item, index) => {
        return (
          <ToggleGroup.Item
            className="ButtonGroupItem x-small"
            key={index}
            value={String(item.value)}
          >
            {item.label}
          </ToggleGroup.Item>
        )
      })}
      {/* <ToggleGroup.Item className="ButtonGroupItem x-small" value="left">
        l
      </ToggleGroup.Item>
      <ToggleGroup.Item className="ButtonGroupItem x-small" value="center">
        c
      </ToggleGroup.Item>
      <ToggleGroup.Item className="ButtonGroupItem x-small" value="right">
        r
      </ToggleGroup.Item> */}
    </ToggleGroup.Root>
  )
}
