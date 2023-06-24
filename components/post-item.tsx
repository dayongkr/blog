import Image from "next/image";
import dummyImage from "@/public/dummy.png";
import Link from "next/link";

interface Props {
  title: string;
  date: string;
  tags: string[];
  slug: string;
  category?: string;
}

export default function PostItem({ title, date, tags, slug, category }: Props) {
  return (
    <article className="mb-6 border-b border-b-gray-200 pb-6">
      <div className="mb-3 flex w-full items-center justify-center overflow-hidden rounded-lg">
        <Link href={`/posts/${slug}`}>
          <Image
            src={dummyImage}
            alt="post cover"
            className="transition-transform duration-700 ease-in-out hover:scale-110"
          />
        </Link>
      </div>
      {category && (
        <Link href={`/posts/${category}`} className="font-bold text-slate-500">
          {category}
        </Link>
      )}
      <h3 className="mt-1 text-2xl font-extrabold">
        <Link href={`/posts/${slug}`}>{title}</Link>
      </h3>
      <p className="mt-3 text-gray-600">
        next.js로 이전하게 된 계기와 이전하면서 새롭게 알게 된 블로그 관련
        정보들을 정리해 보았습니다.
      </p>
      <p className="mt-3 text-sm text-gray-400">{date}</p>
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
