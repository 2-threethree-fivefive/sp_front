'use server';

import {
  commonResType,
  imageDataType,
  productBasicDataType,
  productInfoDataType,
  productPriceDataType,
  productReviewSummaryType,
  productUuidDataType,
} from '@/types/ResponseTypes';

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
  console.log(data);
  return data.data as productBasicDataType;
}

export async function getProductPrice(
  productUuid: string
): Promise<productPriceDataType> {
  'use server';
  const res = await fetch(
    `${process.env.API_BASE_URL}/api/v1/product/productDetails/${productUuid}`
  );
  if (!res.ok) {
    throw new Error('Failed to fetch');
  }

  const data = (await res.json()) as commonResType<productPriceDataType>;
  return data.data as productPriceDataType;
}

export async function getProductReviewSummary(
  productUuid: string
): Promise<productReviewSummaryType> {
  'use server';

  const res = await fetch(
    // todo: 백엔드 url 변경 후 확인
    `${process.env.API_BASE_URL}/api/v1/product/reviewAvg/${productUuid}`
  );
  if (!res.ok) {
    throw new Error('Failed to fetch');
  }

  const data = (await res.json()) as commonResType<productReviewSummaryType>;
  return data.data as productReviewSummaryType;
}

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

  const data = (await res.json()) as commonResType<imageDataType>;
  return data.data as imageDataType;
}

export async function getProductInfo(
  productUuid: string
): Promise<productInfoDataType> {
  try {
    // todo: 백엔드 api 수정 후 review, thumbnail에 대한 것 추가
    const [basicInfo, price] = await Promise.all([
      getProductBasicInfo(productUuid),
      getProductPrice(productUuid),
      // getProductReviewSummary(productUuid),
      // getProductThumbnailImage(productUuid),
    ]);

    return {
      productUuid: productUuid,
      ...basicInfo,
      ...price,
    } as productInfoDataType;
  } catch (error) {
    throw new Error('Failed to fetch');
  }
}

export async function getProductInfoList(
  productUuids: productUuidDataType[]
): Promise<productInfoDataType[]> {
  try {
    // todo: 백엔드 api 수정 후 review, thumbnail에 대한 것 추가
    const productDetailsPromises = productUuids.map(async (product) => {
      const [basicInfo, price] = await Promise.all([
        getProductBasicInfo(product.productUuid),
        getProductPrice(product.productUuid),
        // getProductReviewSummary(product.productUuid),
        // getProductThumbnailImage(product.productUuid),
      ]);

      return {
        productUuid: product.productUuid,
        ...basicInfo,
        ...price,
      } as productInfoDataType;
    });

    const productInfoList = await Promise.all(productDetailsPromises);
    return productInfoList;
  } catch (error) {
    throw new Error('Failed to fetch');
  }
}
