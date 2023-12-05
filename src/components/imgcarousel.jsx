import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function Imgcarousel() {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
    },
  };

  const [recommend, setRecommend] = useState([]);

  useEffect(() => {
    async function fetchAnime() {
      const { data } = await axios.get("https://api.jikan.moe/v4/seasons/now");
      setRecommend(data.data);
    }
    fetchAnime();
  }, []);

  return (
    <div className="carousel__container">
      <h1>Animes for the <span className="highlight">Season</span></h1>
      <Carousel responsive={responsive}>
        {recommend
          .map((data) => (
            <div className="img__container" key={data}>
              <Link to={`${data.mal_id}`}>
                <img
                  className="carousel-img"
                  src={data.images.jpg.image_url}
                  alt=""
                />
                <h2>{data.title_english || data.title}</h2>
              </Link>
            </div>
          ))
          .slice(0, 15)}
      </Carousel>
    </div>
  );
}

export default Imgcarousel;
