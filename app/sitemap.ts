import { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/api'

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts(['slug', 'date']).map((post) => {
    // TODO: 시간도 고려하기
    const date = post.date
      .replaceAll('.', '')
      .split(' ')
      .map((d) => parseInt(d))
    return {
      url: `https://dayong.dev/posts/${post.slug}`,
      lastModified: new Date(date[0], date[1] - 1, date[2]),
    }
  })
  return [{ url: 'https://dayong.dev', lastModified: new Date() }, ...posts]
}
