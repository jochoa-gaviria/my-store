interface Product {
  id: string,
  title: string,
  price: number,
  image: string,
  category: string,
  rating: Rating
}

interface Rating {
  rate: number,
  count: number
}

export { Product }
