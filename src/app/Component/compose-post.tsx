'use client'
import { addPost } from '../actions/add-post.-action'
import ComposeButton from './compose-button'
import { useRef } from 'react'

export function ComposePost ({ userAvatarUrl }: { userAvatarUrl: string }) {
  const fomrRef = useRef<HTMLFormElement>(null)

  return (
    <form ref={fomrRef} action={async (formData) => {
      await addPost(formData)
      fomrRef.current?.reset()
    }} className="flex p-3 border-b border-white/20">
      <img
        className="rounded-full w-10 h-10 object-contain mr-4"
        src={userAvatarUrl ?? ''}
      />
      <div className="flex flex-1 flex-col gap-y-4">
        <textarea
            name='post'
            rows={4}
            className='w-full text-xl text-white bg-black placeholder-gray-500 p-2 '
            placeholder='What happend?'
            />
            <ComposeButton />
      </div>
    </form>
  )
}
