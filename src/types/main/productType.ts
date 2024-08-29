export interface productByEventType {
  eventId: number
  eventName: string
  productList: productListByEventType[]
}

export interface productListByEventType {
  productId: number
  productName: string
  productPrice: number
  productThumbnailImage: string
  reviewScore: number
  reviewCount: number
}
