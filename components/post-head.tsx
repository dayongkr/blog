import Image from "next/image";
export default function PostHead({
  title,
  date,
  category,
  cover,
}: {
  title: string;
  date: string;
  category: string;
  cover: string;
}) {
  return (
    <>
      <div className="my-10 max-w-screen-md">
        {/* <p className="text-xl font-bold text-teal-500">{category}</p> */}
        <h2 className="mb-5 mt-2 text-5xl font-extrabold">{title}</h2>
        <p className="text-lg text-slate-500">{date}</p>
      </div>
      <div className="relative mb-10 h-96 w-full overflow-hidden rounded-lg">
        <Image src={cover} alt="cover" fill={true} className="object-cover" />
      </div>
    </>
  );
}
