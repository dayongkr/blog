import Image from "next/image";
import profilePic from "@/public/profile.png";
import githubIcon from "@/public/github.svg";

export default function Bio() {
  return (
    <div className="flex justify-center flex-nowrap w-full border-gray-150 border-b py-5">
      <div className="grow">
        <h2 className="text-4xl font-bold mb-2">Dayong Lee</h2>
        <p className="text-lg leading-7">
          I am a university student who is living in Korea and interested in
          technology and economy. I like to get various and useful information.
        </p>
        <div className="mt-3">
          <a href="https://github.com/dayongkr" target="_blank">
            <Image
              src={githubIcon}
              alt="github icon"
              className="w-5 opacity-60 hover:opacity-100"
            ></Image>
          </a>
        </div>
      </div>
      <Image
        src={profilePic}
        alt="picture of the author"
        className="w-40 h-40 rounded-full"
      ></Image>
    </div>
  );
}
