import { MDXRemote } from "next-mdx-remote/rsc";
import { mdxComponents } from "./markdown-components";
import Image from "next/image";
import remarkGfm from "remark-gfm";

export default function PostBody({
  content,
  category,
}: {
  content: string;
  category: string;
}) {
  return (
    <MDXRemote
      source={content}
      components={{
        ...mdxComponents,
        img: ({ src, alt }) => {
          return (
            <>
              <Image
                src={`/imgs/${category}/${src}` || "/profile.png"}
                alt={alt || "alt"}
                width={500}
                height={500}
                className="h-full max-h-[500px] w-full max-w-[500px] object-contain"
                loading="lazy"
              />
              <span className="text-center text-base text-slate-500">
                {alt}
              </span>
            </>
          );
        },
      }}
      options={{ mdxOptions: { remarkPlugins: [remarkGfm], format: "md" } }}
    />
  );
}
