export interface User {
  id: number;
  email: string;
  password: string;
  name: string;
  role: string;
  avatar: string;
}

export interface Category {
  id: number;
  name: string;
  image: string;
  slug: string;
}

export interface Product {
  id: number;
  title: string;
  slug: string;
  price: number;
  description: string;
  category: Category;
  images: string[];
}

export interface Product {
  title: string;
  price: number;
  description: string;
  categoryId: number;
  images: string[];
}

export interface Event {
  id: number;
  name: string;
  description: string;
}

export interface Todo {
  id: number;
  text: string;
  userId: string;
  createdAt: string;
}
