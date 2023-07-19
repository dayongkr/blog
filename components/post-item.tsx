import Image from "next/image";
import Link from "next/link";

interface Props {
  title: string;
  date: string;
  tags: string[];
  slug: string;
  category?: string;
  cover: string;
  excerpt: string;
}

export default function PostItem({
  title,
  date,
  tags,
  slug,
  category,
  cover,
  excerpt,
}: Props) {
  return (
    <article className="mb-6 border-b border-b-gray-200 pb-6">
      <Link href={`/posts/${slug}`}>
        {cover ? (
          <div className="relative mb-3 flex h-64 w-full items-center justify-center overflow-hidden rounded-lg">
            <Image
              src={cover}
              alt="post cover"
              className="object-cover transition-transform duration-700 ease-in-out hover:scale-110"
              fill={true}
            />
          </div>
        ) : (
          <div className="mb-3 flex h-64 w-full overflow-hidden rounded-lg bg-teal-600">
            <div className="flex h-full w-full items-center justify-center p-5 text-center text-2xl font-bold text-white transition-transform  duration-700 ease-in-out hover:scale-110">
              {title}
            </div>
          </div>
        )}
      </Link>
      <p className="font-bold uppercase text-teal-600">{category} /</p>
      <h3 className="mt-1 text-2xl font-extrabold">
        <Link href={`/posts/${slug}`}>{title}</Link>
      </h3>
      <p className="mt-3 line-clamp-2 text-gray-600">{excerpt}</p>
      <p className="mt-3 text-gray-500">{date}</p>
      {/* <div className="mt-3 flex gap-2">
        {tags.map((tag: string) => (
          <a
            href="/"
            className="border-gray-150 flex items-center rounded-full border bg-gray-50 px-2 py-0.5 text-sm text-gray-500 hover:text-black"
            key={tag}
          >
            {tag}
          </a>
        ))}
      </div> */}
    </article>
  );
}
