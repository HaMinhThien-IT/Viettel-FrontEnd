import { Pagination, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { authController } from '../../../controller/AuthController'
import { productController } from '../../../controller/ProductController'
import { product } from '../../../model/Product'
import SlideHome from '../../slideHome/SlideHome'
import Brand from '../Brand/Brand'
import Filter from '../Filter/Filter'
import ProductItem from '../ProductItem/ProductItem'
import './LisProduct.css'
interface State {
    product: product[],
    orderBy: string,
    countPage: number,

}
export default function LisProduct() {
    const [state, setState] = useState<State>({ product: [], orderBy: '', countPage: 0 })
    useEffect(() => {
        productController.listProduct(1, 5, '', '', 1, 100000000).then(res => {
            setState({ ...state, product: res.listProduct, countPage: res.totalPage })
        })
    }, [])
    const [page, setPage] = React.useState(1);
    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value)
        productController.listProduct(value, 5, '', '', 1, 100000000).then(res => {
            setState({ ...state, product: res.listProduct, countPage: res.totalPage })

        })
    };

    const setOrder = (orderby: string) => {

        if (orderby === '') {
            console.log(orderby);
            productController.listProduct(1, 5, '', '', 1, 100000000).then(res => { setState({ ...state, product: res.listProduct, countPage: res.totalPage }) })
        } else {
            productController.listProduct(1, 5, '', orderby, 1, 100000000).then(res => {
                setState({ ...state, product: res.listProduct, countPage: res.totalPage })
            })
        }
    }

    return (
        <div>

            <SlideHome />
            <Brand />
            <Filter handleAddrTypeChange={setOrder} />
            <div className="container fixPagination">
                <Stack direction="column"
                    justifyContent="flex-start"
                    alignItems="center"
                    spacing={2}>
                    <div className='containerListProduct'>
                        {
                            state.product.map((item, index) => <ProductItem item={item} key={index} />)
                        }

                    </div>

                    <Pagination color="primary" shape="rounded" variant="outlined" count={state.countPage} page={page} onChange={handleChange} />
                </Stack>


            </div>

        </div>
    )
}
