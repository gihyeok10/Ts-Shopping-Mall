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
    <div onClick={moveDetailPage}>
      <li>props.item.name</li>
      <img src={props.item.image_url}></img>
    </div>
  );
};

export default ProductList;
