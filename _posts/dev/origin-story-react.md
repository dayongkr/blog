---
title: Origin Story - React maded by Honeypot 요약 및 정리
date: 2023-07-10 21:56:00
tags: [react, javascript, web]
category: dev
---

이번에 교내 멘토링을 진행하게 되면서 React에 대해 소개하게 되었는데 무작정 기술적인 개념만 설명하기보다는 탄생 배경을 함께 설명하면 이해하기 쉽지 않을까 생각했다. 하지만 그동안 기술적인 개념만 공부해왔지 React의 탄생 배경에는 관심이 없었다. 그래서 탄생 배경에 대해 알아보고자 [Origin Story: How A Small Team of Developers Created React.js at Facebook](https://www.youtube.com/watch?v=8pDqJVdNa44) 영상을 보게 되었고 생각을 정리할 겸 요약을 해보려고 한다.

## React의 탄생

Facebook은 애플 및 구글과 경쟁하기 위해 웹을 통해 서비스를 제공하려고 노력했다. 이를 위해 Bolt. JS라는 것을 만들었는데 당시 존재하던 다른 프레임워크에 비해서는 좋았지만, 서비스가 커지면서 점점 복잡해지고 유지보수가 어려워졌다. 그때 광고팀에 합류한 [Jordan Walke](https://github.com/jordwalke) 가 새로운 아이디어를 제시했다. 초기에 동료에게 들려준 조던의 아이디어는 다음과 같다.

- API state가 변경되거나 사용자가 무언가를 입력하면 전체 UI 날리고 모든 것을 다시 렌더링한다.
- 하지만 가능한 한 적게 렌더링하도록 시도한다.

다만 당시에는 이 아이디어가 너무 미친 아이디어로 여겨졌다. 특히 한 매니저는 Jordan의 아이디어 및 프로젝트가 혼란을 야기한다고 생각했지만, Jordan이 프로젝트로 할 수 있는 것들로 보여주니 매니저는 Jordan의 아이디어를 받아들일 수밖에 없었다. 그렇게 Jordan은 자기 아이디어를 계속 전파해 나갔다.

## React의 사내 발전

실시간으로 업데이트되는 댓글 시스템, 읽지 않은 메시지를 알려주는 알림 시스템에는 많은 결함이 있었다. 해당 결함들은 주로 양방향 데이터 바인딩을 채택한 MVC 모델의 한계로 생긴 것인데 복잡한 앱에서는 View와 Model의 의존성이 되게 복잡해지기 때문이었다. 이에 Jing chen은 단방향 바인딩을 채택한 [Flux](https://ko.legacy.reactjs.org/blog/2014/05/06/flux.html) 을 제안했고 React에도 이러한 개념이 적용되었다. 그렇게 React는 사내에서 발전해 나갔다.

2012년 Facebook은 Instagram을 인수했고 당시에 App로만 존재하던 Instagram을 웹으로도 만들려고 했다. 그렇게 Instagram으로 파견된 개발자와 디자이너는 CSR으로 만들라는 지시를 받았고 인프라팀으로부터 Bolt.js, JS.HTML 또는 React를 시도해 보라고 조언받았는데 결국 React를 사용하게 되었다. 그렇게 2번째로 Production에 React가 적용되었다. 하지만 아직 많이 부족한 상태였다.

여전히 Bolt.js에 많은 인력이 투입되어 있었고 동시에 React도 실제로 사용되고 있었는데 둘은 매우 비슷하게 생겨서 같이 사용하면 사람들을 혼란에 빠질 수 있기 때문에 둘중에둘 중의 하나를 선택해야 했다. Bolt.js는 스파게티 코드를 작성해야 했고 React는 아직 많이 사용되지 않았고 구현이 미흡하다는 단점이 있었다. 또한 지난 6개월 동안 Bolt.js로 이미 광고 쪽을 다시 만들었기 때문에 또 React로 다시 만드는 것은 비즈니스적으로 부담이었다. 그때 CTO가 개입하여 서비스가 잠시 중단되더라도 장기적으로 보았을 때 옳은 결정을 하기 위하여 React를 선택하게 되었다. 그렇게 광고 쪽을 React로 다시 만들어 나가면서 React 또한 발전해 나갔다.

그렇게 복잡한 서비스인 광고 쪽을 React로 만들면서 많은 테스트를 진행하게 되었고 이제 오픈소스로 공개할 수 있을 정도로 React가 발전했다고 다들 생각했다.

## React의 오픈소스화 및 실패

당시에 페이스북은 오픈소스를 해왔는데 막상 유지보수를 잘 하지 않아 인식이 그렇게 좋지 않았다. 그래서 페이스북 개발자들은 React로 그러한 인식을 바꾸고 싶어 했다. 그렇게 오픈소스화를 결정하고 사내 인프라에서 사용하던 React를 외부에서도 사용할 수 있도록 만들어 나갔고 문서화를 진행하였다. 그리고 2013년 5월 29일 React가 [JSConf에서 발표](https://www.youtube.com/watch?v=GW0rj4sNH2w&ab_channel=JSConf) 되었다. 하지만 당시에는 html, css, js를 분리하여 관리하는 것이 best practice라고 여겨졌기 때문에 이를 한 파일에 작성하는 JSX 문법이 좋지 않다고 여겨졌고 많은 혹평을 받았다. 게다가 해결하려는 문제, 어떠한 효과를 가져오는지 그리고 디자인 원칙이 뭔지에 관해 다루지 않았다 보니 사람들은 자연스럽게 JSX 문법을 비난할 수 밖에 없었다. 그렇게 React는 많은 비난을 받았다.

## React의 성장

모든 사람이 비난한 것은 아니었다. [Sophie Alpert](https://www.linkedin.com/in/sophiebits/)는 React가 자신이 하는 프로젝트에 적합하다고 생각했고 실제로 적용해 봤다. 이는 Khan Academy의 production project였고 처음으로 React를 사용한 사외 프로젝트가 되었다. 그 이후 Sophie Alpert는 React의 컨트리뷰터가 되었고 이는 React 팀의 사기를 높이는 계기가 되었다.

작성중... (정리하기 힘들다...)
