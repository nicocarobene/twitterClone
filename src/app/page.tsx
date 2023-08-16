import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

export default async function Home () {
  const supabase = createServerComponentClient({ cookies })
  const { data: post } = await supabase
    .from('posts')
    .select('*')

  console.log(post, process.env)
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <h1>Hola mundo</h1>
      <pre>
        {JSON.stringify(post, null, 2)}
      </pre>
    </main>
  )
}
