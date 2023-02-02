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
  t.prismaField({
    type: ['Post'],
    resolve: (query, _parent, _args, _ctx, _info) =>
      prisma.post.findMany({ ...query }),
  })
)
