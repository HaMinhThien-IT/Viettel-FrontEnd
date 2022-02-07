export interface Cart{
    product_id : string,
	product_color_id :number,
	product_ram_id :number,
	price_product :number ,
	quantity :number,
	image : string
}
export interface CartWithDetail{
    carts: Cart[]
    id_order : string
}
export interface listCartItem{
	product_name:string,
	productsid:string,
	price :number ,
	color:string,
	ram:string
	quantity :number,
	image : string,
	name_trademark :string
}
export interface CartModel{
	id_order:string,
	productsid:string,
	quantity:number, 
	price:number
}