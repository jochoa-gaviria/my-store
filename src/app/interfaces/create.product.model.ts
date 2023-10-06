import { Product } from "./product.model";

interface CreateProductDto extends Omit<Product, 'id' | 'category'> {
  categoryId: number,
}

export { CreateProductDto }
