export default function PostHead({
  title,
  author,
}: {
  title: string;
  author: string;
}) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{author}</p>
    </div>
  );
}
