import React from "react";
import { useParams } from "react-router";
import { DetailComponent } from "../Component/DetailComponent";
const DetailPage = () => {
  let { id } = useParams();
  console.log("현재 파람은?:", id);

  return (
    <div>
      <DetailComponent id={id} />
    </div>
  );
};

export default DetailPage;
