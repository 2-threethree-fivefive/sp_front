export interface mainCategoryDataType {
  id: number
  mainCategoryName: string
}

export interface subCategoryDataType {
  subCategoryId: number
  subCategoryName: string
}

export interface categoryDetailDataType {
  mainCategoryId: number
  mainCategoryName: string
  subCategoryList: subCategoryDataType[]
}
