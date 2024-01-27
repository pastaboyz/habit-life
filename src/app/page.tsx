import Link from 'next/link'

export default function Home() {
  return (
    <main className="text-center">
      {/* TODO make this look good and put it in a shared space */}
      <h1 className="mt-10 text-4xl font-bold leading-9 tracking-tight text-gray-900">
        Habit Life
      </h1>
      <p>This site is a work in progress</p>
      <p>
        <Link href="/login" className="underline">
          Sign In
        </Link>
      </p>
    </main>
  )
}
