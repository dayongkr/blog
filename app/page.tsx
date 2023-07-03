import { getAllPosts } from "@/lib/api";
import Bio from "@/components/bio";
import PostItem from "@/components/post-item";

export default function Home() {
  const posts = getAllPosts([
    "title",
    "date",
    "tags",
    "slug",
    "category",
    "cover",
    "excerpt",
  ]);
  return (
    <>
      <Bio />
      <div className="mt-5">
        <h2 className="mb-5 border-b border-gray-200 pb-3 text-xl font-bold">
          Latest posts
        </h2>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {posts.map(
            ({ title, date, tags, slug, category, cover, excerpt }) => (
              <PostItem
                title={title}
                date={date}
                tags={tags as unknown as string[]}
                slug={slug}
                key={slug}
                category={category}
                cover={cover}
                excerpt={excerpt}
              />
            )
          )}
        </div>
      </div>
    </>
  );
}
