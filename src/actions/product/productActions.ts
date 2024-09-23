'use server';

import {
  commonResType,
  commonResultType,
  imageDataType,
  productBasicDataType,
  productDiscountDataType,
  productInfoDataType,
  productPriceDataType,
  productReviewSummaryType,
  productUuidDataType,
} from '@/types/ResponseTypes';

// 상품 기본 정보
export async function getProductBasicInfo(
  productUuid: string
): Promise<productBasicDataType> {
  'use server';
  const res = await fetch(
    `${process.env.API_BASE_URL}/api/v1/product/${productUuid}`
  );
  if (!res.ok) {
    throw new Error('Failed to fetch');
  }

  const data = (await res.json()) as commonResType<productBasicDataType>;
  return data.data as productBasicDataType;
}

// 가격만 조회
export async function getProductPrice(
  productUuid: string
): Promise<productPriceDataType> {
  'use server';
  const res = await fetch(
    `${process.env.API_BASE_URL}/api/v1/product/${productUuid}/productDetails`
  );
  if (!res.ok) {
    throw new Error('Failed to fetch');
  }

  const data = (await res.json()) as commonResultType<productPriceDataType>;
  return data.result as productPriceDataType;
}

// 할인 여부, 할인 가격 조회
export async function getProductDiscountPrice(
  productUuid: string
): Promise<productDiscountDataType> {
  'use server';
  const res = await fetch(
    `${process.env.API_BASE_URL}/api/v1/product/${productUuid}/productDiscountInfo`
  );
  if (!res.ok) {
    throw new Error('Failed to fetch');
  }

  const data = (await res.json()) as commonResultType<productDiscountDataType>;
  return data.result as productDiscountDataType;
}

// 총 리뷰 개수, 평점
export async function getProductReviewSummary(
  productUuid: string
): Promise<productReviewSummaryType> {
  'use server';

  const res = await fetch(
    `${process.env.API_BASE_URL}/api/v1/review/${productUuid}/reviewScore`
  );
  if (!res.ok) {
    throw new Error('Failed to fetch');
  }

  const data = (await res.json()) as commonResultType<productReviewSummaryType>;
  return data.result as productReviewSummaryType;
}

// 썸네일 이미지 조회
export async function getProductThumbnailImage(
  productUuid: string
): Promise<imageDataType> {
  'use server';
  const res = await fetch(
    `${process.env.API_BASE_URL}/api/v1/image/mainMedia/${productUuid}`
  );
  if (!res.ok) {
    throw new Error('Failed to fetch');
  }

  const data = (await res.json()) as commonResultType<imageDataType>;
  return data.result as imageDataType;
}

// 상품 정보 조합
export async function getProductInfo(
  productUuid: string
): Promise<productInfoDataType> {
  try {
    // todo: 백엔드 api 수정 후 thumbnail에 대한 것 추가
    const [basicInfo, price, reviewSummary] = await Promise.all([
      getProductBasicInfo(productUuid),
      getProductPrice(productUuid),
      // getProductDiscountPrice(productUuid),
      getProductReviewSummary(productUuid),
      // getProductThumbnailImage(productUuid),
    ]);

    return {
      productUuid: productUuid,
      ...basicInfo,
      ...price,
      // ...discount,
      ...reviewSummary,
    } as productInfoDataType;
  } catch (error) {
    throw new Error('Failed to fetch');
  }
}

// 각 상품 정보 조합 -> 리스트
export async function getProductInfoList(
  productUuids: productUuidDataType[]
): Promise<productInfoDataType[]> {
  try {
    // todo: 백엔드 api 수정 후 thumbnail에 대한 것 추가
    const productDetailsPromises = productUuids.map(async (product) => {
      const [basicInfo, price, reviewSummary] = await Promise.all([
        getProductBasicInfo(product.productUuid),
        getProductPrice(product.productUuid),
        // getProductDiscountPrice(product.productUuid),
        getProductReviewSummary(product.productUuid),
        // getProductThumbnailImage(product.productUuid),
      ]);

      return {
        productUuid: product.productUuid,
        ...basicInfo,
        ...price,
        // ...discount,
        ...reviewSummary,
      } as productInfoDataType;
    });

    const productInfoList = await Promise.all(productDetailsPromises);
    return productInfoList;
  } catch (error) {
    throw new Error('Failed to fetch');
  }
}
