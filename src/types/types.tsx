import * as React from "react";

export type User = {
    id: number;
    name: string;
    email: string;
    password: string;
    comments: Comment[]
}

export type CategoryType = {
    id: number;
    name: string;
    createdAt: string;
    updatedAt: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export type Booking = {
    id: number;
    userId: number;
    booksId: ProductInCart[];
    bookingDate: string;
    totalPrice: number;
}

export type ProductInCart = {
    bookId: number;
    quantity: number;
}



export type Book = {
    quantity: number;
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
    createdAt: string;
    updatedAt: string;
}

export type Author = {
    id: number;
    name: string;
}
