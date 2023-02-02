import { range } from '../lib/utils'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  const user = await prisma.user.create({
    data: {
      name: 'Test',
    },
  })

  const post = await prisma.post.createMany({
    data: range(10).map((i) => ({
      title: `Title ${i + 1}`,
      body: 'Voluptate aliqua deserunt ex laboris ipsum labore culpa. Et occaecat officia aliquip tempor aliquip consectetur proident ipsum sint irure dolor velit. Quis reprehenderit id nostrud dolore eu cupidatat pariatur. Esse sint do nisi nulla reprehenderit consectetur magna. Veniam sint elit occaecat laborum fugiat do cillum. Et et cupidatat amet elit labore duis ullamco duis voluptate magna elit et cillum.',
      userId: user.id,
    })),
  })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
