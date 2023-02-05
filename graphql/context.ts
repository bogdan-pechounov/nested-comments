import { authOptions } from '@/pages/api/auth/[...nextauth]'
import type { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth'

export async function createContext({
  req,
  res,
}: {
  req: NextApiRequest
  res: NextApiResponse
}) {
  const session = await getServerSession(req, res, authOptions)

  // if the user is not logged in, return an empty object
  if (!session || typeof session === 'undefined') return {}

  const { user } = session

  return {
    user,
  }
}
