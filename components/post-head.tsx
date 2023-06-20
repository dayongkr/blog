export default function PostHead({
  title,
  date,
}: {
  title: string;
  date: string;
}) {
  return (
    <div className="my-10">
      <h2 className="font-bold text-5xl mb-3">{title}</h2>
      <p className="text-lg text-slate-500">{date}</p>
    </div>
  );
}
