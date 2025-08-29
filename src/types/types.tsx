export type User = {
    id: number;
    name: string;
    email: string;
    password: string;
    comments: Comment[]//масив id коментів
}

export type Category = {
    id: number;
    name: string;
    createdAt: string;
    updatedAt: string;
    onChange: Function;
}


interface ENUM {
}

export type Book = {
    id: number;
    image: string;
    categoryId: number;
    title: string;
    authorId: number;
    shortDescription: string;
    description: string;
    price: number;
    discountPrice: number;
    pageCount: number;
    status: ENUM
    createdAt: string;
    updatedAt: string;
}

export type Author = {
    id: number;
    name: string;
}
