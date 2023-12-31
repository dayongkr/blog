import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import { Items } from '@/types/interface'

const categoryDirectory = join(process.cwd(), '_posts')

export function getCategorySlugs() {
  return fs.readdirSync(categoryDirectory)
}

export function getPostSlugs() {
  const categorySlugs = getCategorySlugs()
  const postSlugs: string[][] = []
  categorySlugs.forEach((categorySlug) => {
    if (categorySlug === '.DS_Store') return
    const postDirectory = join(categoryDirectory, categorySlug)
    const postFiles = fs.readdirSync(postDirectory)
    postSlugs.push([
      categorySlug,
      ...postFiles.filter((postFile) => postFile.endsWith('.md')),
    ])
  })

  return postSlugs // [categorySlug, ...postSlug]
}

function firstTwoLines(file: { excerpt: any; content: string }) {
  file.excerpt = file.content
    .split('\n')
    .slice(0, 4)
    .filter((item) => item[0] !== '>' && item && item.length > 0)
    .join(' ')
}

export const getPostBySlug = (slug: string, fields: string[] = []) => {
  try {
    const realSlug = slug.replace(/\.md$/, '')
    const fullPath = join(categoryDirectory, `${realSlug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content, excerpt } = matter(fileContents, {
      excerpt: firstTwoLines as unknown as boolean,
    }) // 임시로 boolean으로 타입 처리

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
        if (field === 'date') {
          const date = new Date(data[field])
          items[field] = `${date.getFullYear()}년 ${
            date.getMonth() + 1
          }월 ${date.getDate()}일`
          items.sortDate = date.toJSON()
        } else items[field] = data[field]
      }
    })
    return items
  } catch (err) {
    return { title: '', date: '', content: '', cover: '', excerpt: '' }
  }
}

const sortByDate = (a: Items, b: Items): number => {
  return a.sortDate > b.sortDate ? -1 : 1 // sort posts by date in descending order
}

export const getAllPosts = (fields: string[]) => {
  const slugs = getPostSlugs()
  const posts: Items[] = []
  slugs.forEach((slug) => {
    const categorySlug = slug[0]
    slug.slice(1).forEach((postSlug) => {
      const post = getPostBySlug(`${categorySlug}/${postSlug}`, fields)
      posts.push(post)
    })
  })
  return posts.sort(sortByDate)
}

export const getAllPostsByCategory = (category: string, fields: string[]) => {
  const allPosts = getAllPosts(fields)
  return allPosts.filter((post) => post.category === category)
}
