import { MDXRemote } from "next-mdx-remote/rsc";
import { mdxComponents } from "./markdown-compoents";
import remarkGfm from "remark-gfm";

export default function PostBody({ content }: { content: string }) {
  return (
    <MDXRemote
      source={content}
      components={mdxComponents}
      options={{ mdxOptions: { remarkPlugins: [remarkGfm], format: "md" } }}
    />
  );
}
