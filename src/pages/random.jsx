import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import axios from "axios";
import Menu from "../components/menu";

function Random() {
  const [random, setRandom] = useState([]); // Set this to an empty array
  const [loading, setLoading] = useState();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  

  useEffect(() => {
    setLoading(true);
    async function randomAnime() {
      const { data } = await axios.get("https://api.jikan.moe/v4/random/anime");
      setRandom([data.data]); // Assume data.data is an object, and we're creating an array with a single element
      console.log(data.data);
        setTimeout(() => {
          setLoading(false);
        }, 1000)
    }
    randomAnime();
  }, []);

  function refresh(){
    window.location.reload()
  }

  return (
    <section id="random">
                  <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            {isMenuOpen && <Menu/>}
      <div className="container">
        {loading ? (        
        <div className="info">
          <div className="random__img--skeleton"></div>
          <div className="anime__description">
            <div className="title--skeleton"></div>
            <div className="episodes--skeleton"></div>
            <div className="status--skeleton"></div>
            <div className="description--skeleton"></div>
          </div>
        </div>
        ) :( random.map(
          (
            anime // Ensure random is an array and map over it
          ) => (
            <div className="info" key={anime.mal_id}>
              <figure>
                <img
                  className="random__img"
                  src={anime.images.jpg.image_url}
                  alt=""
                />
              </figure>
              <div className="anime__description">
                <h1>Title: {anime.title}</h1>
                <h2>Episodes: {anime.episodes}</h2>
                <h2>Status: {anime.status}</h2>
                <p>Description: {anime.synopsis}</p>
                <h2>Description: <a className='highlight' href={anime.url} target='_blank'>Read More</a></h2>
                <button className="refresh" onClick={(() =>refresh())}>Click to Randomise</button>
              </div>
            </div>
          )
        ))}
      </div>
      <Footer />
    </section>
  );
}

export default Random;
