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
  console.log("현재 파람은?:", id);
  console.log("Scroll position", window.scrollY);
  return (
    <div>
      <DetailComponent id={id} />
    </div>
  );
};

export default DetailPage;
