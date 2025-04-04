export interface Product {
  name: string;
  description?: string;
  price: number;
}
export let products : Product[] = [
  {
    name : "Phone XL",
    description : "Esto es una descripcion de Phone XL",
    price : 10
  },
  {
    name : "Phone Mini",
    price : 10
  },
  {
    name : "Phone Standar",
    description : "Esto es una descripcion de Phone Standar",
    price : 10
  },
];