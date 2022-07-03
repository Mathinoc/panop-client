export default interface DetailItem {
  title: string;
  id: string;
  photo: string[];
  price: number;
  category: string;
  description: string;
  caracteristics: caracteristic[],
  supplierId: string;
}

export interface caracteristic {
  key: string,
  value: number | string
}