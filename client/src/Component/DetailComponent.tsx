import React from "react";

type PropsType = {
  id: string | undefined;
};
export const DetailComponent = (props: PropsType) => {
  let data = props.id;
  let parsNumber: number;
  if (typeof data === "string") {
    parsNumber = parseInt(data);
  }

  return <div>DetailComponent</div>;
};
