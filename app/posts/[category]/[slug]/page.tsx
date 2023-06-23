import { getPostBySlug } from "@/lib/api";
import PostBody from "@/components/post-body";
import PostHead from "@/components/post-head";
import markdownStyles from "./markdown-styles.module.css";

export const metadata = {
  title: "Dayong Blog",
  description: "Generated by create next app",
};

export default async function Post({
  params,
}: {
  params: { slug: string; category: string };
}) {
  const post = getPostBySlug(`${params.category}/${params.slug}`, [
    "title",
    "date",
    "content",
  ]);
  metadata.title = post.title;

  return (
    <div className="flex flex-wrap  justify-center">
      <div className="w-full max-w-screen-md">
        <PostHead title={post.title} date={post.date} />
        <div className={markdownStyles["markdown"]}>
          <PostBody content={post.content} />
        </div>
      </div>
    </div>
  );
}