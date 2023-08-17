'use client'
import { Card, CardHeader, CardBody, CardFooter, Avatar } from '@nextui-org/react'
import { IconMessageCircle, IconHeart, IconRepeat } from '@tabler/icons-react'
import Link from 'next/link'

export default function PostCard ({
  username,
  avatarUrl,
  fullName,
  content
}: {
  username: string | null
  avatarUrl: string | null
  fullName: string | null
  content: string | null
}) {
  return (
    <Card className="shadow-none bg-transparent hover:bg-slate-800 transition border-b rounded-none border-white/20">
      <CardHeader className="justify-between">
        <div className="flex gap-x-2">
          <Link href={`/${username ?? ''}`}>
            <Avatar isBordered radius="full" size="md" src={avatarUrl ?? ''}/>
          </Link>
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">{fullName}</h4>
            <h5 className="text-small tracking-tight text-default-400">@{username}</h5>
          </div>
        </div>
      </CardHeader>
      <CardBody className="px-3 py-0 text-xs text-white">
        <p>
          {content}
        </p>
      </CardBody>
      <CardFooter className="gap-3">
        <IconMessageCircle className='w-4 h-4'/>
        <IconHeart className='w-4 h-4'/>
        <IconRepeat className='w-4 h-4'/>
      </CardFooter>
    </Card>
  )
}
