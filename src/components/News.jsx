import React from "react";
import NewsImage from "../assets/News.png"

const News = () => {
  
  return (
    <div>
    <a href="https://www.kens5.com/video/entertainment/television/great-day-sa/kriebel-law-firm/273-8284632">
    <img src={NewsImage} alt="News Image" />
    </a>
      <p>News</p>
      <br />
      <a href="https://www.kens5.com/video/entertainment/television/great-day-sa/kriebel-law-firm/273-8284632">
        {" "}
        News : Jacqueline's Appearance on KENS5 Great Day SA
      </a>
      <div>
        <a href="https://www.kens5.com/video/entertainment/television/great-day-sa/kriebel-law-firm/273-8284632"></a>
      </div>
    </div>
  );
};

export default News;
