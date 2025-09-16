import * as React from "react"
import { type ToastActionElement, type ToasterToastProps } from "./toast"

type ToastProps = ToasterToastProps & {
  id: string
  title?: React.ReactNode
  description?: React.ReactNode
  action?: ToastActionElement
}

export type { ToastProps }