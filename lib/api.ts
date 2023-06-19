import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import { Items } from '@/types/interface';

const categoryDirectory = join(process.cwd(), 'posts')

export function getCategorySlugs() {
  return fs.readdirSync(categoryDirectory)
}

export function getPostSlugs() {
  const categorySlugs = getCategorySlugs()
  const postSlugs: string[][] = []
  categorySlugs.forEach((categorySlug) => {
    const postDirectory = join(categoryDirectory, categorySlug)
    const postFiles = fs.readdirSync(postDirectory)
    postSlugs.push([categorySlug, ...postFiles.filter((postFile) => postFile.endsWith('.md'))])
  })

  return postSlugs // [categorySlug, ...postSlug]
}

export function getPostBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(categoryDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const items: Items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }

    if (typeof data[field] !== 'undefined') {
      if (field === 'date')
        items[field] = data[field].toLocaleDateString('ko-KR');
      else
        items[field] = data[field]
    }
  })
  return items
}

export function getAllPosts(fields: string[] = []) {
  const slugs = getPostSlugs()
  const posts: Items[] = []
  slugs.forEach((slug) => {
    const categorySlug = slug[0]
    slug.slice(1).forEach((postSlug) => {
      const post = getPostBySlug(`${categorySlug}/${postSlug}`, fields)
      posts.push(post)
    })
  })
  return posts.sort((post1, post2) => (post1.date > post2.date ? -1 : 1)) // sort posts by date in descending order
}