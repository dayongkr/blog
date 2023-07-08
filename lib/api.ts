import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import { Items } from '@/types/interface';
import { cache } from 'react';

const categoryDirectory = join(process.cwd(), '_posts')

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

function firstTwoLines(file: { excerpt: any; content: string; }) {
  file.excerpt = file.content.split('\n').slice(0, 2).join(' ');
}

export const getPostBySlug = cache((slug: string, fields: string[] = []) => {
  try {
    const realSlug = slug.replace(/\.md$/, '')
    const fullPath = join(categoryDirectory, `${realSlug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content, excerpt } = matter(fileContents, { excerpt: firstTwoLines as unknown as boolean }) // 임시로 boolean으로 타입 처리

    const items: Items = {} as Items


    fields.forEach((field) => {
      if (field === 'slug') {
        items[field] = realSlug
      }
      if (field === 'content') {
        items[field] = content
      }

      if (field === 'category') {
        const categorySlug = realSlug.split('/')[0]
        items[field] = categorySlug
      }

      if (field === 'excerpt') {
        items[field] = excerpt as string
      }

      if (typeof data[field] !== 'undefined') {
        if (field === 'date')
          items[field] = data[field].toLocaleDateString('ko-KR');
        else
          items[field] = data[field]
      }
    })
    return items
  } catch (err) {
    return { title: "", date: "", content: "", cover: "", excerpt: "" }
  }
})

export const getAllPosts = cache((fields: string[]) => {
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
})

export const getAllPostsByCategory = cache((category: string, fields: string[]) => {
  const slugs = getPostSlugs()
  const posts: Items[] = []
  slugs.forEach((slug) => {
    const categorySlug = slug[0]
    if (categorySlug === category) {
      slug.slice(1).forEach((postSlug) => {
        const post = getPostBySlug(`${categorySlug}/${postSlug}`, fields)
        posts.push(post)
      })
    }
  })
  return posts.sort((post1, post2) => (post1.date > post2.date ? -1 : 1)) // sort posts by date in descending order
})