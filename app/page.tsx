import { getAllPosts } from "@/lib/api";
import Bio from "./components/bio";
import PostItem from "./components/post-item";

export default function Home() {
  const posts = getAllPosts(["title", "date", "tags"]);
  return (
    <>
      <Bio />
      <div className="mt-5">
        <h2 className="text-xl font-bold pb-3 mb-5 border-b border-gray-200">
          Latest posts
        </h2>
        <div className="grid grid-cols-1 gap-5 xl:grid-cols-3 md:grid-cols-2">
          {posts.map(({ title, date, tags }) => (
            <PostItem
              title={title}
              date={date}
              tags={tags as unknown as string[]}
            />
          ))}
        </div>
      </div>
    </>
  );
}
