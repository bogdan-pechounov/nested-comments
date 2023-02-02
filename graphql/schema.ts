import './types/Post'
import './types/User'
import { builder } from './builder'

export const schema = builder.toSchema()
