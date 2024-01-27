'use client'

import { TextField } from '@/components/Input'
import { useSimpleForm } from '@/components/util'
import Button_TW from '@/components/button_tw'
import { registerUserWithEmail } from '@/lib/firebase'
import Badge_TW from '@/components/badge_tw'

type SignUpForm = {
  email: string
  password: string
  confirm: string
}

function validate({ email, password, confirm }: Partial<SignUpForm>): boolean {
  return Boolean(email && password && password === confirm)
}

function getWhatIsWrong({
  password,
  confirm,
}: Partial<SignUpForm>): string | null {
  if (!password) return null

  if (password.length < 8) return 'Password must be at least 8 characters'
  if (!/[A-Z]/.test(password))
    return 'Password must contain at least one uppercase letter'
  if (!/[a-z]/.test(password))
    return 'Password must contain at least one lowercase letter'
  if (!/[0-9]/.test(password))
    return 'Password must contain at least one number'

  if (password && confirm && password !== confirm)
    return 'Passwords do not match'

  return null
}

function WhatsWrongWithMyPassword(
  formData: Partial<SignUpForm>
): JSX.Element | null {
  const somethingWrong = getWhatIsWrong(formData)
  return somethingWrong ? (
    <Badge_TW variant="danger" className="text-white">
      {somethingWrong}
    </Badge_TW>
  ) : null
}

export default function SignUp() {
  const { isValid, configProps, handleSubmit, values } = useSimpleForm({
    validate,
  })

  return (
    <>
      <main>
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-10 w-auto"
              src="/favicon.ico"
              alt="Your Company"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Create an account
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form
              className="space-y-6"
              noValidate
              autoComplete="off"
              onSubmit={handleSubmit(({ email, password }) => {
                registerUserWithEmail({ email, password }).then(() => {
                  window.location.href = '/application'
                })
              })}
            >
              <TextField
                label="Email"
                {...configProps({ name: 'email' })}
                type="email"
                required
              />

              <TextField
                label="Password"
                {...configProps({ name: 'password' })}
                type="password"
                required
              />

              <TextField
                label="Confirm Password"
                {...configProps({ name: 'confirm' })}
                type="password"
                required
              />

              <WhatsWrongWithMyPassword {...values} />

              <div>
                <Button_TW
                  type="submit"
                  className="text-white w-full"
                  variant={isValid ? 'primary' : 'light'}
                  disabled={!isValid}
                >
                  Sign Up
                </Button_TW>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  )
}
