import { productDetailDataType } from '@/types/main/productDetailType'
import React from 'react'
import ArrowRightIcon from '/public/assets/images/icons/arrowRightIcon.svg'
import Image from 'next/image'
import Link from 'next/link'
import NoticeIcon from '/public/assets/images/icons/noticeIcon.svg'

function ProductInfo({ productInfo }: { productInfo: productDetailDataType }) {
  return (
    <section className="flex flex-col gap-4 p-4 text-lg bg-white border-b">
      <p>{productInfo.productName}</p>
      <p className="pt-1 text-2xl font-bold">
        {productInfo.productPrice.toLocaleString()}원
      </p>
      {/* 로그인되어있을때만 이동 가능 */}
      <Link href="https://member.ssg.com/m/mbrsp/join/benefit.ssg">
        <Image
          alt="SSG Universe"
          width={0}
          height={0}
          src="https://simg.ssgcdn.com/trans.ssg?src=/ui/m_ssg/img/product/mndtl_universe_type_banner07.png"
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }}
        />
      </Link>
      {/* 공지 (재고관련, 최근 구매율,  ) */}
      <div className="w-full flex items-center gap-2 p-3 border border-black rounded-md text-sm">
        <NoticeIcon />
        <span>공지사항</span>
      </div>
      <div className="flex mt-2 gap-5 text-sm">
        <div>
          <span>★</span>
          <span className="pl-1 font-bold">{productInfo.reviewScore}</span>
        </div>
        <div className="flex items-center">
          <span className="underline underline-offset-1">
            {productInfo.reviewCount.toLocaleString()}건 리뷰
          </span>
          <ArrowRightIcon fill="black" />
        </div>
      </div>
    </section>
  )
}

export default ProductInfo
