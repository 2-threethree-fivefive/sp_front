'use server';
import { cartItemType } from '@/types/RequestTypes';
import { revalidateTag } from 'next/cache';

// 장바구니 품목 확인
export async function fetchCartItemList(): Promise<cartItemType[]> {
  const res = await fetch(`${process.env.API_BASE_URL}/api/v1/wishList/view`, {
    method: 'GET',
    next: { tags: ['checkCart, addCart, cartCount, deleteCart'] },
    cache: 'no-cache',
  });
  if (!res.ok) {
    throw new Error('Failed to fetch cart item list');
  }
  const data = await res.json();
  return data;
}

// 나의 상품 장바구니 품목의 총 가격, 총 할인액 조회
export async function fetchCartItemPrice(): Promise<cartItemType[]> {
  const res = await fetch(
    `${process.env.API_BASE_URL}/api/v1/wishList/totalPriceAndDiscount`,
    {
      method: 'GET',
      next: { tags: [] },
      cache: 'no-cache',
    }
  );
  if (!res.ok) {
    throw new Error('Failed to fetch cart item list');
  }
  const data = await res.json();
  return data;
}

// 장바구니 체크 업데이트
export const cartCheckUpdate = async (item: cartItemType, checked: boolean) => {
  'use server';
  const res = fetch(
    `${process.env.API_BASE_URL}/api/v1/wishList/${item.id}/check`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  revalidateTag('checkCart');
};

// 장바구니 전체 체크 업데이트
export const cartCheckAllUpdate = async () => {
  'use server';
  const res = fetch(`${process.env.API_BASE_URL}/api/v1/wishList/checkAll`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  revalidateTag('checkCart');
};

// 장바구니 체크된 품목 삭제
export const deleteCartCheckedItemList = async () => {
  'use server';
  const res = fetch(
    `${process.env.API_BASE_URL}/api/v1/wishList/deleteChecked`,
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  revalidateTag('deleteCart');
};

// 장바구니 체크된 품목 삭제
export const deleteCartItemList = async (item: cartItemType) => {
  'use server';
  const res = fetch(
    `${process.env.API_BASE_URL}/api/v1/wishList/${item.id}/deleteWishListItem`,
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  revalidateTag('deleteCart');
};

// 장바구니 전체 삭제
export const deleteAllCartItemList = async (item: cartItemType) => {
  'use server';
  const res = fetch(`${process.env.API_BASE_URL}/api/v1/wishList/deleteAll`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  revalidateTag('deleteCart');
};

// 장바구니에 상품 추가
export const addCartItem = async (productUuid: string, quantity: number) => {
  'use server';
  const res = await fetch(
    `${process.env.API_BASE_URL}/api/v1/wishList/fromProductDetailsPage/wishlist/${productUuid}/add/${quantity}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  revalidateTag('addCart');
};
