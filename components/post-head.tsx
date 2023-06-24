export default function PostHead({
  title,
  date,
}: {
  title: string;
  date: string;
}) {
  return (
    <div className="my-10">
      <h2 className="mb-3 text-5xl font-extrabold">{title}</h2>
      <p className="text-lg text-slate-500">{date}</p>
    </div>
  );
}
