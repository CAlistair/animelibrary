import React, { useEffect, useState } from 'react'
import Navbar from '../components/navbar'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import Footer from '../components/footer';
import Menu from '../components/menu';
import { useSelector } from 'react-redux';
import { selectUser } from '../app/userSlice';

function Selected({ list, setList }) {
  const { id } = useParams();
  const [anime, setAnime] = useState([]); // Set this to an empty array
  const [loading, setLoading] = useState();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const user = useSelector(selectUser)
  

  
  function addToList(id){
        // Check if the ID already exists in the list
  const isDuplicate = list.includes(id);
  if (!isDuplicate) {
    // Add the ID to the list only if it's not a duplicate
    setList((prevList) => [...prevList, id]);
  } else {
    console.log("ID already exists in the list");
  }
  }

useEffect(() => {
  console.log(list);
}, [list]);

  React.useEffect(() => {
    setLoading(true)
    async function fetchAnime(){
      const { data } = await axios.get(`https://api.jikan.moe/v4/anime/${id}`)
      setAnime([data.data])
    }
    setTimeout(() => {
      setLoading(false);
    }, 1000)
    fetchAnime();
  },[])

  function removeFromList(id) {
    // Filter out the anime with the given ID from the list
    setList((prevList) => prevList.filter((animeId) => animeId !== id));
  }

  return (
    <section id='selected'>
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
        ) :( anime.map(
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
                <h2>Popularity: {anime.popularity}</h2>
                <h2>Year: {anime.year}</h2>
                <p>Description: {anime.synopsis || "None"}</p>
                <h2 className='description__small'>Description: <a className='highlight' href={anime.url} target='_blank'>Read More</a></h2>
                {user && (
                  <>
                    {list.includes(id) ? (
                      <button className='btn--add--remove' onClick={() => removeFromList(id)}>
                        Remove from List
                      </button>
                    ) : (
                      <button className='btn--add--remove' onClick={() => addToList(id)}>
                        Add to List
                      </button>
                    )}
                  </>
                )}
              </div>
            </div>
          )
        ))}
      </div>
      <Footer />
    </section>
  )
}

export default Selected
