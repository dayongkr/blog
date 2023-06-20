export default function PostHead({
  title,
  date,
}: {
  title: string;
  date: string;
}) {
  return (
    <div>
      <h2 className="font-bold text-5xl mt-7 mb-3">{title}</h2>
      <p className="text-lg text-slate-500">{date}</p>
    </div>
  );
}
