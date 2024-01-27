import {
  useState,
  useCallback,
  ComponentPropsWithoutRef,
  FormEvent,
} from 'react'

type ConfigProps = ComponentPropsWithoutRef<'input'>
type FormData = Record<string, string>
export type Validator = (data: FormData) => boolean
type FormHandler = (data: FormData) => void
type Props = {
  validate?: Validator
}

const alwaysValid: Validator = () => true

export function useSimpleForm({ validate = alwaysValid }: Props = {}) {
  const [values, setValues] = useState<FormData>({})
  const isValid = validate(values)

  const configProps = useCallback(
    ({ name, ...props }: ConfigProps & { name: string }): ConfigProps => ({
      ...props,
      onChange: ({ target: { value } }) =>
        setValues((vals) => ({ ...vals, [name]: value })),
      name,
    }),
    [setValues]
  )

  const handleSubmit = useCallback(
    (handler: FormHandler) => (e: FormEvent) => {
      e.preventDefault()
      isValid && handler(values)
    },
    [values, isValid]
  )

  return {
    values,
    isValid,
    isDirty: Boolean(Object.values(values).join('')),
    configProps,
    handleSubmit,
  }
}
