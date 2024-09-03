import { mainCategoryDataType } from './categoryType'

export interface productByEventType {
  eventId: number
  eventName: string
  productList: productInfoType[]
}

export interface productInfoType {
  productId: number
  productName: string
  productPrice: number
  productThumbnailImage: string
  reviewScore: number
  reviewCount: number
}

export interface productBestDataTpe {
  page: number
  isLast: boolean
  pageSize: number
  categoryInfo: mainCategoryDataType
  productList: productInfoType[]
}
