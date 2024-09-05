import {
  categoryDetailDataType,
  mainCategoryDataType,
} from '@/types/main/categoryType';

// 전체 카테고리 조회 데이터
export const mainCategoryListData: mainCategoryDataType[] = [
  {
    id: 1,
    mainCategoryName: '텀블러/보온병',
  },
  {
    id: 2,
    mainCategoryName: '머그/컵',
  },
  {
    id: 3,
    mainCategoryName: '라이프스타일',
  },
  {
    id: 4,
    mainCategoryName: '티/커피용품',
  },
  {
    id: 5,
    mainCategoryName: '케이크',
  },
  {
    id: 6,
    mainCategoryName: '초콜릿/스낵',
  },
  {
    id: 7,
    mainCategoryName: '세트',
  },
];

//디테일 카테고리
export const categoryDetailData: categoryDetailDataType[] = [
  {
    mainCategoryId: 1,
    mainCategoryName: '텀블러/보온병',
    subCategoryList: [
      {
        subCategoryId: 1,
        subCategoryName: '플라스틱 텀블러',
      },
      {
        subCategoryId: 2,
        subCategoryName: '스테인리스 텀블러',
      },
      {
        subCategoryId: 3,
        subCategoryName: '보온병',
      },
      {
        subCategoryId: 4,
        subCategoryName: '콜드컵',
      },
    ],
  },
  {
    mainCategoryId: 2,
    mainCategoryName: '머그/컵',
    subCategoryList: [
      {
        subCategoryId: 1,
        subCategoryName: '머그',
      },
      {
        subCategoryId: 2,
        subCategoryName: '글라스',
      },
      {
        subCategoryId: 3,
        subCategoryName: '리유저블',
      },
    ],
  },
  {
    mainCategoryId: 3,
    mainCategoryName: '라이프스타일',
    subCategoryList: [],
  },
  {
    mainCategoryId: 4,
    mainCategoryName: '티/커피용품',
    subCategoryList: [],
  },
];
