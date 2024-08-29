import { productsByEventDatas } from '@/datas/main/productDatas'
import { productByEventType } from '@/types/main/productType'
import React from 'react'

async function ProductsByEvent({
  eventItem,
}: {
  eventItem: productByEventType
}) {
  return <div>{eventItem.eventName}</div>
}

export default ProductsByEvent
