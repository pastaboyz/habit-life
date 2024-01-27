import { ReactNode } from 'react'

interface props {
  variant: string
  className: string
  children: ReactNode
}

export default function Badge_TW({ variant, className, children }: props) {
  return (
    <>
      <span
        className={`inline-flex items-center rounded-md ${variant} ${className} px-2 py-1 text-xs font-medium ring-1 ring-inset ring-gray-500/10`}
      >
        {children}
      </span>
    </>
  )
}
