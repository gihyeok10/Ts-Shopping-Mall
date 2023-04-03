import React from "react";
import { useParams } from "react-router";
import { DetailComponent } from "../Component/DetailComponent";
import { useEffect } from "react";
const DetailPage = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  let { id } = useParams();
  return (
    <div>
      <DetailComponent id={id} />
    </div>
  );
};

export default DetailPage;
