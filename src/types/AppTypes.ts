export interface ProductType {
  _id: string,
  name: string,
  price: string,
  category: string,
  sizes: SyzeType[],
  imgSource: string,
}

export interface ProductUploadType {
  name: string,
  price: string,
  category: string,
  sizes: SyzeType[],
  imgSource: File,
}

export interface SyzeType {
  size: number, 
  available: boolean
};