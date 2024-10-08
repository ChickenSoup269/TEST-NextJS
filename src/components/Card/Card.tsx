"use client"
import { useState } from "react"
import "./card.css"
import custom from "./custom.module.scss"
import clsx from "clsx"

export default function Card() {
  const [noDie /*setDie*/] = useState(false)
  return (
    <div
      className={clsx("card", {
        [custom.card]: noDie,
      })}
    >
      Card
    </div>
  )
}
