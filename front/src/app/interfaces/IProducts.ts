interface IProduct {
    id: number;
    name: string;
    description: string;
    price: number;
    stock: number;
    image: string;
    categoryId: number;
}

export interface IProductListProps {
    key: string;
    id: number;
    name: string;
    img: string;
}

export default IProduct;