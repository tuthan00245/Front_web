export interface IProduct {
    id: string;
    thumbnail: string;
    isOutOfStock: boolean;
    page: number;
    size: string;
    publishDate: string;
    finalPrice: number;
    originPrice: number;
    description: string;
    name: string;
    attribute1: string;
    attribute2: string;
    isHighlight: boolean;
    authorName: string;
    type: string;
    isRemoved: boolean;
    code: string;
    kvId: number;
    category: {};
    bookGalleries: object[];
    author: boolean;
    bookAttributes: [];
    quantity: number;
}
