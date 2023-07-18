---
title: Tailwindcss 환경설정
date: 2023-07-17 23:36:00
tags: [tailwindcss, css, web]
---

요즘 많이 사용되는 utility css인 tailwindcss를 편하게 사용할 수 있도록 세팅하는 방법을 알아보겠습니다.

> [tailwindcss Editor Setup 공식 문서](https://tailwindcss.com/docs/editor-setup)를 참조했습니다.

## 1. VSCode 확장 프로그램 설치

VSCode 확장 프로그램에서 `Tailwind CSS IntelliSense`를 설치합니다. 해당 확장 프로그램은 공식 확장프로그램으로 개발 경험을 향상해 주는 다양한 기능을 제공합니다.

- class 이름 자동완성 및 suggestions
- syntax highlighting
- linting
- hover preview
  - 마우스를 올리면 해당 클래스의 CSS 속성을 볼 수 있다.

### VSCode 환경설정

VSCode는 일반적으로 string을 작성할 때 자동완성을 제공하지 않는다. 하지만 Tailwind CSS는 class 이름을 string으로 작성하기 때문에 이를 무시하고 자동완성을 제공하도록 설정해야 한다.

```settings.json
{
  ..., // 기존 설정
  "editor.quickSuggestions": {
    "strings": true
  }
}
```

`ctrl/cmd` + `shift` + `p` 를 눌러 커맨드 팔레트를 띄운 후 `Preferences: Open User Settings (JSON)`을 검색하여 `settings.json` 파일을 연후 위와 같이 설정하면 VSCode에서 Tailwind CSS의 자동완성을 사용할 수 있다.

> 안되면 VSCode를 재시작해보자.

## 2. Prettier로 코드 자동 정렬

```html
<style>
  .class2 {
    color: red;
  }
  .class1 {
    color: blue;
  }
</style>
<div class="class1 class2">blue</div>
```

위와 같이 class 속성에 적은 순서에 따라 적용되지 않고 css에서 정의한 순서대로 적용된다. 따라서 미리 정의된 class를 사용하는 tailwindcss에서 의도하지 않은 결과가 나올 수 있다. 따라서 Prettier를 사용하여 recommend order로 정렬하도록 설정하여 css가 적용되는 순서를 알 수 있도록 한다. 또한 보기에도 편하다.

```bash
pnpm i -D prettier prettier-plugin-tailwindcss
```

위 명령어를 설치하여 prettier과 tailwindcss plugin을 설치하자.

```prettier.config.js
module.exports = {
  plugins: ['prettier-plugin-tailwindcss'],
}
```

그 후 프로젝트 루트에 `prettier.config.js` 파일을 생성하여 위와 같이 설정한다.

## 마무리

위와 같은 기능들을 사용하지 않으면 tailwindcss에 적응하기도 어렵고 왜 개발 경험이 좋다고 하는지 알기 힘들다. 따라서 위와 같은 설정을 통해 suggestion과 sorting 기능을 필히 사용해 보자!
