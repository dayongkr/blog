import Link from 'next/link'
import { Code } from 'bright'
import { MDXComponents } from 'mdx/types'

export const mdxComponents: MDXComponents = {
  pre: (
    props: React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLPreElement
    >,
  ) => <Code theme="github-dark" lineNumbers {...props} />,
  a: ({ children, href, ...props }) => {
    return (
      // @ts-expect-error legacy refs
      <Link href={href || ''} {...props} target="_blank">
        {children}
      </Link>
    )
  },
}
