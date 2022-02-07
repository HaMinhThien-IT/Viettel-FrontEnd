export  interface ProductLine {
    product_id: string,
    product_name: string,
    trademark_id: string,
    createAt: string,
    updateAt: string,
}
export  interface ProductLines {
    product_id: string,
    product_name: string,
    trademark_id: string,
    createat: string,
    updateat: string,
    name_trademark :string
}
export interface Products {
    productsid :string,
    product_id: string,
    product_color_id: number,
    product_ram_id: number,
    price_product: number,
    quantity: number,
    image: string
}
export interface getProductsById extends Products{
    color : string,
    ram : string
}
export interface AddProductWithDetail extends ProductLine {
    products: Products
}

export interface product {
    product_id: string,
    ram : string
    product_name: string,
    trademark_id: string,
    createAt: string,
    updateAt: string,
    product_color_id: number,
    product_ram_id: number,
    price_product: number,
    quantity: number,
    image: string
}



interface ProductsDetailTemp {
    productsid:string
    product_id: string,
    product_color_id: number,
    product_ram_id: number,
    price_product: number,
    quantity: number,
    image: string,
    ram :string,
    color:string
}

export interface ProductDetailModel {
    product_id: string,
    product_name: string,
    trademark_id: string,
    createAt: string,
    updateAt: string,
    products:ProductsDetailTemp[]
}
