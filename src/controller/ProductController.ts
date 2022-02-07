import axios from "axios";
import { authAxios } from "../http";
import { ProductLine, ProductLines, Products } from "../model/Product";

let localHost: string = 'http://localhost:3002'

class ProductController {
    listProduct(page: number, pagesize: number, name: string,orderBy:string,from:number ,to:number) {
        return authAxios.post(`${localHost}/listProduct`, { page,pagesize, name ,orderBy,from,to }).then(res => {
            return res.data
        })
    }
    getProductDetail (product_id:string){
        return axios.get(`${localHost}/product/${product_id}`).then(res=>{
            return res.data
        })
    }
    getListProductLine(){
        return authAxios.get(`/listProductLine`).then(res =>{
            return res.data
        })
    }
    getBrandProduct(){
        return axios.get(`${localHost}/trademark`).then(res =>{
            return res.data
        })
    }
    getColorProduct(){
        return axios.get(`${localHost}/color`).then(res =>{
            return res.data
        })
    }
    getRamProduct(){
        return axios.get(`${localHost}/ram`).then(res =>{
            return res.data
        })
    }
    addProductLine(product:ProductLines){
        return axios.post(`${localHost}/addProductLine`,product).then(res =>{
            return res.data
        })
    }
    editProductLine(product:ProductLines){
        return axios.put(`${localHost}/editProductLine/${product.product_id}`,product).then(res =>{
            return res.data
        })
    }
    getProductsById(product_id:string){
        return axios.post(`${localHost}/getProductsByID/${product_id}`).then(res =>{
            return res.data
        })
    }
    addToProductsById(products:Products){
        return axios.post(`${localHost}/addProductsByID/${products.product_id}`,products).then(res =>{
            return res.data
        })
    }
    editProductById(products:Products){
        return axios.post(`${localHost}/editProductsByID/${products.productsid}`,products).then(res =>{
            return res.data
        })
    }
    deleteProductById(productsId: string,product_id:string){
        return axios.post(`${localHost}/removeProductsByID/${productsId}`,{product_id}).then(res =>{
            return res.data
        })
    }

}
export const productController = new ProductController();