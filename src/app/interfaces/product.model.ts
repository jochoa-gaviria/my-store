interface Product {
  id: string,
  title: string,
  price: number,
  images: string[],
  description: string,
  category: Category,
}

interface Category {
  id: string,
  name: string
}

export { Product }
