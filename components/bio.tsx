import Image from 'next/image'
import profilePic from '@/public/profile.png'
import githubIcon from '@/public/github.svg'
import linkedInIcon from '@/public/linkedin.svg'
import emailIcon from '@/public/email.svg'

export default function Bio() {
  return (
    <section className="flex w-full max-w-screen-md justify-center gap-5 py-5 max-md:flex-wrap">
      <Image
        src={profilePic}
        alt="picture of the author"
        className="h-40 w-40 rounded-full"
      />
      <div className="flex flex-wrap items-center gap-2">
        <h2 className="text-5xl font-extrabold">Dayong Lee</h2>
        <p className="text-lg leading-7">
          <b>세상에 도움이 되는 것들을 만들고 싶고 생각하는 것을 좋아하는 </b>
          대학생입니다! 성균관대학교 소프트웨어학과에 재학중이며 주로 웹 개발
          공부를 하고 있습니다!
        </p>
        <div className="flex gap-3">
          <a
            href="https://github.com/dayongkr"
            target="_blank"
            className="flex items-center justify-center"
          >
            <Image
              src={githubIcon}
              alt="github icon"
              className="w-5 opacity-60 hover:opacity-100"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/dayong-lee-240b53266/"
            target="_blank"
            className="flex items-center justify-center"
          >
            <Image
              src={linkedInIcon}
              alt="linkedIn icon"
              className="w-5 opacity-60 hover:opacity-100"
            />
          </a>
          <a
            href="mailto:dayongkr@gmail.com"
            target="_blank"
            className="flex items-center justify-center"
          >
            <Image
              src={emailIcon}
              alt="email icon"
              className="w-5 opacity-60 hover:opacity-100"
            />
          </a>
        </div>
      </div>
    </section>
  )
}
