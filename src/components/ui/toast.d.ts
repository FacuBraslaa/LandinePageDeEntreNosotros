import * as React from "react"
import { type VariantProps } from "class-variance-authority"
import { Toast, ToastAction } from "./toast"

type ToastVariants = VariantProps<typeof Toast>

export interface ToastProps
  extends React.ComponentPropsWithoutRef<typeof Toast>,
    ToastVariants {}

export type ToastActionElement = React.ReactElement<typeof ToastAction>