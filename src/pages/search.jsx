import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import axios from "axios";
import nothing from "../assets/landingsearch.png";
import Footer from "../components/footer";
import { Link } from "react-router-dom";
import Menu from "../components/menu";

function Search() {
  const [searchAnime, setSearchAnime] = useState([]);
  let [searched, setSearched] = useState([]);
  const [backimg, setBackImg] = useState(true);
  const [loading, setLoading] = useState();
  const [filter, setFilter] = useState()
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  async function animeSearch() {
    setLoading(true)
    const { data } = await axios.get(
      `https://api.jikan.moe/v4/anime?q=${searchAnime}&limit=20`
    );
    setSearched(data.data);
    console.log(data.data);
    setTimeout(() => {
      setLoading(false);
    }, 1000)
  }

  function onSearch() {
    setBackImg(false)
    animeSearch(searchAnime);
  }

  function refresh(filtered){
    setLoading(true)
    setSearched(filtered)
    setTimeout(() => {
      setLoading(false);
    }, 1000)
  }

  function filterAnime(e){
    if (e === "POPULARITY"){
      const filtered = searched.sort((a, b) => (a.popularity) - (b.popularity));
      refresh(filtered)
      setSearched = filtered
    }
    else if (e === "NEW_TO_OLD"){
      const filtered = searched.sort((a,b) => (b.year) - (a.year))
      console.log(filtered)
      refresh(filtered)
      setSearched = filtered
    }
    else if (e === "OLD_TO_NEW"){
      const filtered = searched.sort((a,b) => (a.year) - (b.year))
      console.log(filtered)
      refresh(filtered)
      setSearched = filtered
    }
  }

  return (
    <section id="search">
                  <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            {isMenuOpen && <Menu/>}
      <div className="container">
        <div className="search__form">
          <input
            id="input__box"
            value={searchAnime}
            onChange={(e) => setSearchAnime(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && onSearch()}
            className="search__bar"
            placeholder="Enter anime title"
            type="text"
          />
          <button
            onClick={() => onSearch()}
            id="search__button"
            className="button-search btn"
          >
            Search
          </button>
          <div className="filter__container">
          <select id="filter" onChange={(e) => filterAnime(e.target.value)}>
            <option defaultValue="">Filter</option>
            <option value="NEW_TO_OLD">New to old</option>
            <option value="OLD_TO_NEW">Old to new</option>
            <option value="POPULARITY">Popularity</option>
          </select>
          </div>
        </div>
        <div className="anime__container">
          {
            backimg ? (
              <figure className="searching__img--container">
              <img className="searching__img" src={nothing} alt="" />
            </figure>
            ) : (
              <></>
            )
          }
          {loading ? (
            new Array(12).fill(0).map((_, index) => (
            <div className="anime__info--skeleton" key={index}>
            <div className="anime__img--skeleton"></div>
            <h1 className="anime__title--skeleton"></h1>
            </div>
            ))
          ) : (
            searched
              .map((data) => (
                <div key={data.mal_id} className="anime__info">
                  <Link to={`${data.mal_id}`}>
                    <img
                      className="anime__img"
                      src={data.images.jpg.image_url}
                      alt=""
                    />
                  </Link>
                  <h1>{data.title_english || data.title}</h1>

                </div>
              ))
              .slice(0, 12)
            )}
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default Search;
