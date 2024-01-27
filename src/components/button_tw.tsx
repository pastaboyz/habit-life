import {
  ReactNode,
  MouseEvent,
  forwardRef,
  ComponentPropsWithoutRef,
} from 'react'

interface Props extends ComponentPropsWithoutRef<'button'> {
  variant?: string
  className?: string
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void
  children: ReactNode
}

function Button_TW(props: Props, ref: React.Ref<HTMLButtonElement>) {
  const { variant = 'primary', className, onClick, children, ...rest } = props

  return (
    <button
      ref={ref}
      className={`h-10 px-6 ${variant} ${className} rounded-md hover:brightness-90`}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  )
}

export default forwardRef(Button_TW)
