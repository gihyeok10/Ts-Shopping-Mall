import React from "react";
import { Product } from "../Pages/MainPage";
import { useNavigate } from "react-router";

type Props = {
  item: Product;
};
const ProductList = (props: Props) => {
  const navigate = useNavigate();
  const moveDetailPage = () => {
    navigate(`/detail/${props.item.product_id}`);
  };
  return (
    <div className="product_container">
      <img onClick={moveDetailPage} src={props.item.image_url}></img>
      <p>{props.item.brand}</p>
      <p>{props.item.name}</p>
      <p>{props.item.price}원</p>
    </div>
  );
};

export default ProductList;
