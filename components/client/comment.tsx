'use client'
import Giscus from '@giscus/react'

export default function Comment() {
  return (
    <Giscus
      id="comments"
      repo="dayongkr/blog-comment"
      repoId="R_kgDOJzIJ3Q"
      category="giscus"
      categoryId="DIC_kwDOJzIJ3c4CXa0g"
      mapping="title"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="bottom"
      theme="light"
      lang="ko"
      loading="lazy"
    />
  )
}
