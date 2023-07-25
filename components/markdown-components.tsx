import Link from "next/link";
import Image from "next/image";
import { Code } from "bright";
import { MDXComponents } from "mdx/types";

export const mdxComponents: MDXComponents = {
  pre: (
    props: React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLPreElement
    >
  ) => <Code theme="github-dark" lineNumbers {...props} />,
  a: ({ children, href, ...props }) => {
    return (
      // @ts-expect-error legacy refs
      <Link href={href || ""} {...props} target="_blank">
        {children}
      </Link>
    );
  },
  img: ({ src, alt, width, height }) => {
    return (
      <figure className="my-3 flex w-full flex-col items-center justify-center gap-5">
        <Image
          src={src || "/profile.png"}
          alt={alt || "alt"}
          width={(width as number) || 500}
          height={(height as number) || 300}
          className="overflow-hidden rounded-lg"
          priority={true}
        />
        <span className="text-center text-base text-slate-500">{alt}</span>
      </figure>
    );
  },
};
