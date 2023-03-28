import React from "react";
import { useState, useEffect } from "react";

const BannerComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images: string[] = [back1, back2, back3];

  return <div id="banner"></div>;
};

export default BannerComponent;

const back1 =
  "https://user-images.githubusercontent.com/103566149/228145341-c55777a9-c268-40af-a1c1-db03e3c4372b.png";
const back2 =
  "https://user-images.githubusercontent.com/103566149/228146554-3b8ef369-acac-49eb-97dc-df03254876b6.png";
const back3 =
  "https://user-images.githubusercontent.com/103566149/228146616-281ae26f-5fdd-47e0-8398-9287972bd2bf.png";
