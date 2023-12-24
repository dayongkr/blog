import Image from 'next/image'
import ProfileImg from '@/public/profile.png'

export default function PostHead({
  title,
  date,
  category,
  cover,
}: {
  title: string
  date: string
  category: string
  cover: string
}) {
  return (
    <>
      <section className="my-10 w-full max-w-screen-md border-b border-slate-200 py-5">
        <p className="text-lg font-bold uppercase text-teal-600 lg:text-xl">
          {category} /
        </p>
        <h2 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl lg:leading-tight">
          {title}
        </h2>
        <div className="mt-5 flex items-center gap-2">
          <Image
            src={ProfileImg}
            width={30}
            alt="profile"
            className="rounded-full"
          />
          <p className="font-bold">Dayong Lee</p>
          <p>·</p>
          <p className="text-slate-500">{date}</p>
        </div>
      </section>
      {cover && (
        <section className="relative mb-10 h-96 w-full overflow-hidden rounded-lg">
          <Image
            src={`/imgs/${category}/${cover}`}
            alt="cover"
            fill={true}
            className="object-cover"
          />
        </section>
      )}
    </>
  )
}
