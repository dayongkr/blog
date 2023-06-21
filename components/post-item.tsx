import Image from "next/image";
import dummyImage from "@/public/dummy.png";
import Link from "next/link";

interface Props {
  title: string;
  date: string;
  tags: string[];
  slug: string;
}

export default function PostItem({ title, date, tags, slug }: Props) {
  return (
    <article className="border-b-gray-200 border-b pb-6 mb-6">
      <div className="w-full rounded-lg overflow-hidden flex justify-center items-center">
        <Link href={`/blog/${slug}`}>
          <Image
            src={dummyImage}
            alt="post cover"
            className="hover:scale-110 ease-in-out transition-transform duration-700"
          />
        </Link>
      </div>
      <h3 className="text-2xl font-bold mt-5">
        <Link href={`/blog/${slug}`}>{title}</Link>
      </h3>
      <p className="mt-1 text-sm text-gray-500">{date}</p>
      <p className="mt-3 text-gray-600">
        next.js로 이전하게 된 계기와 이전하면서 새롭게 알게 된 블로그 관련
        정보들을 정리해 보았습니다.
      </p>
      <div className="flex gap-2 mt-3">
        {tags.map((tag: string) => (
          <a
            href="/"
            className="bg-gray-50 px-2 py-0.5 border-gray-150 border flex items-center rounded-full text-sm text-gray-500 hover:text-black"
            key={tag}
          >
            {tag}
          </a>
        ))}
      </div>
    </article>
  );
}
