import Bio from "./components/bio";
import PostItem from "./components/post-item";

export default function Home() {
  return (
    <>
      <Bio />
      <div className="mt-5">
        <h2 className="text-2xl font-bold mb-3">Lastest Posts</h2>
        {["Nest.js 13로 블로그 만들기", "아무거나 쓰기"].map((title) => (
          <PostItem title={title} />
        ))}
      </div>
    </>
  );
}
