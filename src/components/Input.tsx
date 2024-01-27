import { useId, ComponentPropsWithoutRef, ReactNode } from 'react'

export interface InputProps extends ComponentPropsWithoutRef<'input'> {
  label: string
  helpLink?: ReactNode
}

export function TextField({
  label,
  helpLink,
  ...props
}: InputProps): JSX.Element {
  const id = useId()
  return (
    <div>
      <div className="flex items-center justify-between">
        <label
          htmlFor={id}
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          {label}
        </label>
        {helpLink}
      </div>
      <div className="mt-2">
        <input
          {...props}
          id={id}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
    </div>
  )
}