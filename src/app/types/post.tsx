import { type Database } from './typesdatabase'

type PostsEntity = Database['public']['Tables']['posts']['Row']
type UserEntity = Database['public']['Tables']['users']['Row']

export type Posts = PostsEntity & {
  user: UserEntity
}
