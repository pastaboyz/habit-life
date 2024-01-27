'use client'

import Button from '@/components/button_tw'
import { signOut, useUser } from '@/lib/firebase'

export default function ApplicationHome() {
  const user = useUser()

  return (
    <>
      welcome
      <br />
      <Button onClick={signOut}>sign out</Button>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </>
  )
}
