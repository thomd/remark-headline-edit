import { remark } from 'remark'
import remarkHeadingLines from '../index.js'
import remarkRehype from 'remark-rehype'
import rehypeStringify from 'rehype-stringify'
import { read } from 'to-vfile'

const file = await remark()
    .use(remarkHeadingLines, {
        position: 'after',
        maxDepth: 2,
        urlPattern: 'edit?line={start}-{end}',
        linkText: 'edit',
        className: 'h{depth}'
    })
    .use(remarkRehype)
    .use(rehypeStringify)
    .process(await read('example.md'))

console.log(file.value)

