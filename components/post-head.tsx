export default function PostHead({
  title,
  date,
  category,
}: {
  title: string;
  date: string;
  category: string;
}) {
  return (
    <div className="my-10">
      <p className="text-xl font-bold text-teal-500">{category}</p>
      <h2 className="mt-2 text-5xl font-extrabold">{title}</h2>
      <p className="text-lg text-slate-500">{date}</p>
    </div>
  );
}
