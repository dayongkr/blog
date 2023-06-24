import PostItem from "@/components/post-item";
import { getAllPostsByCategory } from "@/lib/api";

export default function Category({ params }: { params: { category: string } }) {
  const posts = getAllPostsByCategory(params.category, [
    "title",
    "date",
    "tags",
    "slug",
    "category",
  ]);
  return (
    <div>
      <h2>{params.category}</h2>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">{posts.map(({ title, date, tags, slug, category }) => (
        <PostItem
          title={title}
          date={date}
          tags={tags as unknown as string[]}
          slug={slug}
          key={slug}
        />
      ))}</div>
    </div>
  );
}
