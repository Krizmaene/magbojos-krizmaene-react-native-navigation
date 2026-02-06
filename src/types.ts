export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    image: any;
}

export interface CartItem extends Product {
    quantity: number;
}