import { CreateProductDto } from "./create.product.model";

interface UpdateProductDto extends Partial<CreateProductDto> { }

export { UpdateProductDto }
