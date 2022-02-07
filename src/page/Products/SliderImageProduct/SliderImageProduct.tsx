
import { ProductDetailModel } from '../../../model/Product'
import './SliderImageProduct.css'

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { v4 as uuidv4 } from 'uuid';
export default function SliderImageProduct(props: props) {
    return (
        <div className="withSlider">
            <Carousel>
                {props.productImage.products.map((item, index) => (
                    <div>
                        <img key={index+1} src={item.image} alt="" />
                    </div>
                ))}
            </Carousel>
        </div>


    );
}

type props = {
    productImage: ProductDetailModel
}
