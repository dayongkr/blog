import ReactMarkDown from "react-markdown";
import remarkGfm from "remark-gfm";
import Image from "next/image";
import Link from "next/link";

export default function PostBody({ content }: { content: string }) {
  return (
    <ReactMarkDown
      components={{
        img: (props) => {
          return (
            <Image
              src={props.src as string}
              alt={props.alt as string}
              width={500}
              height={300}
            />
          );
        },
        a: (props) => {
          return <Link href={props.href as string}>{props.children}</Link>;
        },
      }}
      remarkPlugins={[remarkGfm]}
      children={content}
    />
  );
}
