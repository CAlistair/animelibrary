import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import axios from "axios";
import Menu from "../components/menu";
import { useSelector } from "react-redux";
import { selectUser } from "../app/userSlice";
import { useParams } from "react-router-dom";

function Random({ list, setList }) {
  const { id } = useParams();
  const [random, setRandom] = useState([]); // Set this to an empty array
  const [loading, setLoading] = useState();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const user = useSelector(selectUser);

  useEffect(() => {
    setLoading(true);
    async function randomAnime() {
      const { data } = await axios.get("https://api.jikan.moe/v4/random/anime");
      setRandom([data.data]); // Assume data.data is an object, and we're creating an array with a single element
      console.log(data.data);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
    randomAnime();
  }, []);

  function refresh() {
    //Refreshes random anime without resetting web page
    setLoading(true);
    async function randomAnime() {
      const { data } = await axios.get("https://api.jikan.moe/v4/random/anime");
      setRandom([data.data]); // Assume data.data is an object, and we're creating an array with a single element
      console.log(data.data);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
    randomAnime();
  }

  function addToList(id) {
    const stringId = id.toString();

    // Check if the ID already exists in the list
    const isDuplicate = list.includes(stringId);

    if (!isDuplicate) {
      // Add the ID to the list only if it's not a duplicate
      setList((prevList) => [...prevList, stringId]);
    } else {
      console.log("ID already exists in the list");
    }
  }

  function removeFromList(id) {
    const stringId = id.toString();

    // Filter out the anime with the given ID from the list
    setList((prevList) => prevList.filter((animeId) => animeId !== stringId));
  }


  useEffect(() => {
    console.log(list);
  }, [list]);

  return (
    <section id="random">
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      {isMenuOpen && <Menu />}
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
        ) : (
          random.map(
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
                  <h2 className="description__small">
                    Description:{" "}
                    <a className="highlight" href={anime.url} target="_blank">
                      Read More
                    </a>
                  </h2>
                  <button className="refresh" onClick={() => refresh()}>
                    Click to Randomise
                  </button>
                </div>
              </div>
            )
          )
        )}
        {user ? (
          list.includes(random[0]?.mal_id.toString()) ? (
            <button
              className="random__add btn"
              onClick={() => removeFromList(random[0]?.mal_id)}
            >
              Remove from List
            </button>
          ) : (
            <button
              className="random__add btn"
              onClick={() => addToList(random[0]?.mal_id)}
            >
              Add to List
            </button>
          )
        ) : (
          <></>
        )}
      </div>
      <Footer />
    </section>
  );
}

export default Random;
