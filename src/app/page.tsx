import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { AuthButtonServer } from './Component/AuthButton-Server'
import { redirect } from 'next/navigation'
import PostList from './Component/post-list'
import { type Database } from './types/typesdatabase'
import { ComposePost } from './Component/compose-post'

export default async function Home () {
  const supabase = createServerComponentClient<Database>({ cookies })

  const { data: { session } } = await supabase.auth.getSession()
  if (session === null)redirect('/login')
  const { data: post } = await supabase
    .from('posts')
    .select('*, user:users(name, user_name, avatar_url)')
    .order('created_at', { ascending: false })
  return (
    <main className='flex min-h-screen flex-col items-center justify-between bg-black'>
      <section className='w-full max-w-[600px] mx-auto border-l border-r border-white/20 0 min-h-screen'>
        <AuthButtonServer />
        <ComposePost userAvatarUrl={session.user?.user_metadata.avatar_url}/>
        <PostList post={post}/>
      </section>
    </main>
  )
}
