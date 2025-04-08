export interface Product {
  id: number;
  name: string;
  description?: string;
  price: number;
}
export let products : Product[] = [
  {
    id: 0,
    name : "Phone XL",
    description : "Esto es una descripcion de Phone XL",
    price : 10
  },
  {
    id: 1,
    name : "Phone Mini",
    price : 300
  },
  {
    id: 2,
    name : "Phone Standar",
    description : "Esto es una descripcion de Phone Standar",
    price : 800
  },
];