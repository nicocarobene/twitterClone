import { type Posts } from '../types/post'
import PostCard from './post-card'

export default function PostList ({ post }: { post: Posts[] }) {
  return (
    <>
      {post?.map((twit) => {
        const { id, content, user } = twit
        const {
          user_name: userName,
          name: fullName,
          avatar_url: avatarUrl
        } = user
        return (
          <PostCard
            key={id}
            avatarUrl={avatarUrl}
            content={content}
            fullName={fullName}
            username={userName}
          />
        )
      })}
    </>
  )
}
