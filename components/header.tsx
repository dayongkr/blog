import Link from "next/link";

export default function Header({ title }: { title: string }) {
  return (
    <header className="flex items-center justify-center sticky top-0 border-b border-gray-200 bg-white z-50">
      <div className="flex items-center h-20 w-full max-w-screen-xl p-5">
        <Link href="/">
          <h1 className="text-2xl font-bold">{title}</h1>
        </Link>
      </div>
    </header>
  );
}
