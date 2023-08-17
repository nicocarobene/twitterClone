'use client'
import { useEffect, useRef } from 'react'
import { experimental_useFormStatus as userFormStatus } from 'react-dom'
export default function ComposeTextArea () {
  const { pending } = userFormStatus()
  const alreadySend = useRef(false)
  const textAreaRef = useRef<HTMLTextAreaElement>(null)
  useEffect(() => {
    if (textAreaRef.current === null) return
    if (!pending && alreadySend.current) {
      alreadySend.current = false
      textAreaRef.current.value = ''
      return
    }
    alreadySend.current = pending
  }, [pending])

  return (
        <textarea
        ref={textAreaRef}
        name='post'
        rows={4}
        className='w-full text-xl text-white bg-black placeholder-gray-500 p-2 '
        placeholder='What happend?'
        />
  )
}
