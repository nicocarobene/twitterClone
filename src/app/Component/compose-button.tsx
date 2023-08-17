'use client'
import { experimental_useFormStatus as userFormStatus } from 'react-dom'

export default function ComposeButton () {
  const { pending } = userFormStatus()
  return (
        <button type='submit' disabled={pending} className={`bg-sky-500 ${pending ? 'bg-sky-500/25' : ''} font-bold rounded-full px-5 py-2 self-end`}>{pending ? 'Posting... ' : 'Post'}</button>
  )
}
