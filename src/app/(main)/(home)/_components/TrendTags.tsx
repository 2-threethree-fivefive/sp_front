import { trendTagData } from '@/datas/main/trendtagData'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

async function TrendTags() {
  // fetch
  // const res = await fetch('/api/trend_tags')
  const res = await trendTagData

  return (
    <section className="w-full pt-10 px-4">
      <h1 className="text-2xl font-bold">TREND TAG</h1>
      <div className="pt-4 overflow-x-auto flex">
        {res.map((tag) => {
          return (
            <Link
              key={tag.id}
              href={{
                pathname: '/products',
                query: { tagId: tag.id },
              }}
              className="w-28 min-w-28 h-auto mr-4 pb-4 flex flex-col items-center gap-2 "
            >
              <Image
                src={tag.tagImgUrl}
                alt={tag.tagName}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
                className="rounded-full"
              />
              <span className="text-sm">{tag.tagName}</span>
            </Link>
          )
        })}
      </div>
    </section>
  )
}

export default TrendTags
