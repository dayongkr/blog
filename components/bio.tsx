import Image from "next/image";
import profilePic from "@/public/profile.png";
import githubIcon from "@/public/github.svg";

export default function Bio() {
  return (
    <div className="flex justify-center flex-nowrap w-full py-5 max-w-screen-md">
      <Image
        src={profilePic}
        alt="picture of the author"
        className="w-40 h-40 rounded-full mr-6"
      />
      <div className="flex flex-wrap items-center">
        <h2 className="text-5xl font-bold mb-2">Dayong Lee</h2>
        <p className="text-lg leading-7">
          <b>세상에 도움이 되는 것들을 만들고 싶고 생각하는 것을 좋아하는 </b>
          대학생입니다! 성균관대학교 소프트웨어학과에 재학중이며 주로 웹 개발
          공부를 하고 있습니다!
        </p>
        <a href="https://github.com/dayongkr" target="_blank">
          <Image
            src={githubIcon}
            alt="github icon"
            className="w-5 opacity-60 hover:opacity-100"
          />
        </a>
      </div>
    </div>
  );
}