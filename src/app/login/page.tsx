'use client'

import { TextField } from '@/components/Input'
import { useSimpleForm } from '@/components/util'
import Button_TW from '@/components/button_tw'
import { signInWithEmail } from '@/lib/firebase'

type SignIn = {
  email: string
  password: string
}

function validate({ email, password }: Partial<SignIn>): boolean {
  return Boolean(email && password)
}

export default function Login() {
  const { isValid, configProps, handleSubmit } = useSimpleForm({
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
              Sign in to your account
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form
              className="space-y-6"
              noValidate
              autoComplete="off"
              onSubmit={handleSubmit(({ email, password }) => {
                signInWithEmail({ email, password }).then(() => {
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
                helpLink={
                  <a
                    href="#"
                    className="font-semibold text-indigo-400 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                }
                required
              />

              <Button_TW
                type="submit"
                className="text-white w-full"
                variant={isValid ? 'primary' : 'light'}
                disabled={!isValid}
              >
                Sign In
              </Button_TW>
            </form>

            <p className="mt-10 text-center text-sm text-gray-500">
              Not a member?{' '}
              <a
                href="/login/signup"
                className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
              >
                Start a 14 day free trial
              </a>
            </p>
          </div>
        </div>
      </main>
    </>
  )
}
