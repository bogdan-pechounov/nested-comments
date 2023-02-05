import prisma from '@/lib/prisma'
import { builder } from '../builder'

builder.prismaObject('Post', {
  fields: (t) => ({
    id: t.exposeID('id'),
    title: t.exposeString('title'),
    body: t.exposeString('body'),
    user: t.relation('user'),
  }),
})

builder.queryField('posts', (t) =>
  t.prismaConnection({
    type: 'Post',
    cursor: 'id',
    resolve: (query, _parent, _args, _ctx, _info) => {
      console.log('QUERY:', query)
      console.log('CONTEXT', _ctx)
      return prisma.post.findMany({ ...query })
    },
  })
)
