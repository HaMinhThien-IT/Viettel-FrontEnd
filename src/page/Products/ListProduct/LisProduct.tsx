import { Pagination, Stack, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { authController } from "../../../controller/AuthController";
import { brandController } from "../../../controller/BrandController";
import { productController } from "../../../controller/ProductController";
import { brand } from "../../../model/Option";
import { product } from "../../../model/Product";
import { searchContext } from "../../../store/SearchContext";
import SlideHome from "../../slideHome/SlideHome";
import Brand from "../Brand/Brand";
import Filter from "../Filter/Filter";
import ProductItem from "../ProductItem/ProductItem";
import ItemNull from "./ItemNull/ItemNull";
import "./LisProduct.css";
interface State {
  product: product[];
  orderBy: string;
  countPage: number;
  brands: brand[];
}
export default function LisProduct() {
  const [state, setState] = useState<State>({
    product: [],
    orderBy: "",
    countPage: 0,
    brands: [],
  });
  const { value, onSearch } = useContext(searchContext)
  useEffect(() => {
    let brands: brand[] = [];
    brandController.getListBrand().then((res) => {
      brands = res;
      productController.listProduct(1, 25, "", "", 1, 100000000, "").then((res) => {
        setState({
          ...state,
          product: res.listProduct,
          countPage: res.totalPage,
          brands: brands,
        });
      });
    });
  }, []);
  useEffect(() => {
    if (value != undefined && value != '' && value != null) {
      productController.listProduct(1, 25, value, "", 1, 100000000, "").then((res) => {
        setState({
          ...state,
          product: res.listProduct,
          countPage: res.totalPage,
        });
      });
    } else {
      productController.listProduct(1, 25, "", "", 1, 100000000, "").then((res) => {
        setState({
          ...state,
          product: res.listProduct,
          countPage: res.totalPage,
        });
      });
    }

  }, [value])
  const [page, setPage] = React.useState(1);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    productController
      .listProduct(value, 25, "", "", 1, 100000000, "")
      .then((res) => {
        setState({
          ...state,
          product: res.listProduct,
          countPage: res.totalPage,
        });
      });
  };

  const setOrder = (orderby: string) => {

    if (orderby === "" || value == undefined && value == '' && value == null) {
      productController.listProduct(1, 25, '', "", 1, 100000000, "").then((res) => {
        setState({
          ...state,
          product: res.listProduct,
          countPage: res.totalPage,
        });
      });
    } else {

      productController
        .listProduct(1, 25, value, orderby, 1, 100000000, "")
        .then((res) => {
          console.log("data", res);

          setState({
            ...state,
            product: res.listProduct,
            countPage: res.totalPage,
          });
        });
    }

  };
  const getIdBrand = (id: string) => {
    if (id != '') {
      productController.listProduct(1, 25, "", "", 1, 100000000, id).then((res) => {
        console.log(res);
        setState({
          ...state,
          product: res.listProduct,
          countPage: res.totalPage,
        });
      });
    }
  }
  return (
    <div>
      <SlideHome />
      <Brand getIdBrand={getIdBrand} value={state.brands} />
      <Filter handleAddrTypeChange={setOrder} />
      <div className="container fixPagination">
        <Stack
          direction="column"
          justifyContent="flex-start"
          alignItems="center"
          spacing={2}
        >
          {
            state.product == null || state.product.length == 0 ? (
              <ItemNull value={value} />
            ) : (
              <div className="containerListProduct">
                {
                  state.product.map((item, index) => (
                    <ProductItem item={item} key={index} />
                  ))
                }

              </div>
            )
          }
          <Pagination
            color="primary"
            shape="rounded"
            variant="outlined"
            count={state.countPage}
            page={page}
            onChange={handleChange}
          />
        </Stack>
      </div>
    </div>
  );
}
