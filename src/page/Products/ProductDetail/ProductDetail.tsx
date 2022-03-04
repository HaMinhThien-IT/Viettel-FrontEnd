import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { productController } from '../../../controller/ProductController';
import { product, ProductDetailModel } from '../../../model/Product';
import SliderImageProduct from '../SliderImageProduct/SliderImageProduct';
import ProductDetailItem from './ProductDetailItem/ProductDetailItem';
import './ProductDetail.css'
import { cartContext } from '../../../store/CartContext';
import { orderController } from '../../../controller/OrderController';
import { CartModel } from '../../../model/Cart';
import { AiFillDropboxCircle } from 'react-icons/ai';
import { FaMedal } from 'react-icons/fa';
import { RiExchangeBoxFill } from 'react-icons/ri';
import { MdLocalShipping } from 'react-icons/md';
import { BsCheckCircleFill } from 'react-icons/bs';
import { GoLocation } from 'react-icons/go';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import ProductItem from '../ProductItem/ProductItem';
import { toast } from 'react-toastify';
type State = {
    productDetail: ProductDetailModel[],
    idBrand: string
}
export default function ProductDetail() {
    const { product_id } = useParams();
    const [state, setState] = useState<State>({ productDetail: [], idBrand: '' })

    const [relatedProducts, setRelatedProducts] = useState<product[]>([])

    const { id_order, onListCart } = useContext(cartContext)

    useEffect(() => {
        productController.getProductDetail(String(product_id)).then(res => {
            setState({ ...state, productDetail: res })
            productController.getRelatedProducts(res[0].trademark_id).then(res2 => {
                setRelatedProducts(res2)
            })
        }
        )
    }, [product_id])
    const addToCart = (cartModel: CartModel) => {
        orderController.addToCart(id_order, cartModel).then(() => {
            onListCart()
            toast.success("Mua hàng thành công ", {
                autoClose: 3000,
                position: "bottom-left"
            })
        });
    }
    return (
        <>

            <div className='container'>
                <div className="containerDetail">
                    <div>
                        {state.productDetail.map((item, index) => <SliderImageProduct key={index} productImage={item} />)}
                    </div>
                    <div className="infoProductDetail">
                        {state.productDetail.map((item, index) => <ProductDetailItem key={index} addToCart={addToCart} item={item} />)}
                    </div>

                    <div className="isBoxProductDetailItem">
                        <div className="headerIsBox">
                            <p className='titleHeaderBoxItem'>Trong hộp có</p>
                            <p className='itemHeaderBoxItem'><AiFillDropboxCircle /> <span>iPhone với iOS 15; USB-C to Lightning Cáp; Sách hướng dẫn</span></p>
                        </div>
                        <div className="headerBottom">
                            <p className='titleHeaderBoxItem'> ViettelStore cam kết</p>
                            <p className='itemHeaderBoxItem' > <FaMedal /> <span> Bảo hành chính hãng 12 tháng.</span></p>
                            <p className='itemHeaderBoxItem' > <RiExchangeBoxFill /> <span>1 đổi 1 trong 45 ngày đối với sản phẩm lỗi.</span></p>
                            <p className='itemHeaderBoxItem' > <MdLocalShipping /> <span> Giao hàng tận nơi miễn phí trong vòng 10km.</span></p>
                        </div>
                        <div className="headerBottom">
                            <p className='itemHeaderBoxItem' > <BsCheckCircleFill /><span>Giá bán đã bao gồm thuế VAT.</span></p>
                            <p className='itemHeaderBoxItem' > <BsCheckCircleFill /><span>Sản phẩm mới 100%.</span></p>
                        </div>
                        <button className="addressShop">
                            <GoLocation /> Tìm shop có hàng gần nhất
                        </button>
                    </div>
                </div>
                <div className="containerSlideProductRela">
                    <h3>ĐIỆN THOẠI TƯƠNG TỰ</h3>
                    <Swiper slidesPerView={5} className="mySwiper containerListProduct">

                        {relatedProducts.map((item, index) => (
                            <SwiperSlide >

                                <ProductItem key={index} item={item} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

        </>
    )
}
