import axios from "axios";

type PropsType = {
  id: string | undefined;
};

export const DetailComponent = (props: PropsType) => {
  let data = props.id;
  let Product_Id: number;

  if (typeof data === "string") {
    Product_Id = parseInt(data);
  }

  const getDetailProduct = () => {
    try {
      axios
        .post("http://localhost:3002/getDetailProduct", { id: Product_Id })
        .then((res) => {
          console.log("상품의 디테일데이타:", res.data);
        });
    } catch (e) {
      console.log("에러요:", e);
    }
  };

  return (
    <div>
      <button onClick={getDetailProduct}>데이타 받아보기</button>
    </div>
  );
};

// axios로 id가 ? 인 정보를 달라 이런식으로 하면 될듯?? 해서 그 정보 렌더링 ㄱㄱ
