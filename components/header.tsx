import Link from 'next/link'

export default function Header({ title }: { title: string }) {
  return (
    <header className="sticky top-0 z-50 flex w-full items-center justify-center border-b border-gray-200 bg-white">
      <div className="flex h-20 w-full max-w-screen-xl items-center justify-between p-5">
        <Link href="/">
          <h1 className="text-2xl font-bold">{title}</h1>
        </Link>
        <p className="text-2xl font-bold">🚧공사중🚧</p>
      </div>
    </header>
  )
}
