export interface mainCategoryDataType {
  id: number;
  mainCategoryName: string;
}

export interface subCategoryDataType {
  subCategoryId: number;
  subCategoryName: string;
}

export interface categoryDetailDataType {
  mainCategoryId: number;
  mainCategoryName: string;
  subCategoryList: subCategoryDataType[];
}

// 추가할 것
export interface topCategoryDataType {
  id: number;
  topCategoryName: string;
}

export interface middleCategoryDataType {
  id: number;
  middleCategoryName: string;
  bottomCategories: bottomCategoryDataType[];
}

export interface bottomCategoryDataType {
  id: number;
  bottomCategoryName: string;
}
