import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import Menu from "../components/menu";
import Footer from "../components/footer";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../app/userSlice";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import axios from "axios";

function Account() {
  const user = useSelector(selectUser);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutOfApp = () => {
    auth
      .signOut()
      .then(() => {
        dispatch(logout());
        navigate("/");
      })
      .catch((error) => alert(error.message));
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
    <section id="account">
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      {isMenuOpen && <Menu />}
      <div className="account__container">
        <div className="account--info">
          <div className="account--header">
            <h1>Account: {user?.displayName}</h1>
            <Link to="/login">
              <button className="btn" onClick={logoutOfApp}>
                Logout
              </button>
            </Link>
          </div>
          <div className="account--list">
            {recommend
              .map((data) => (
                <div className="account--list--anime" key={data}>
                  <Link to={`${data.mal_id}`}>
                    <figure>
                      <img
                        className="account--list--img"
                        src={data.images.jpg.image_url}
                        alt=""
                      />
                    </figure>
                  </Link>
                </div>
              ))
              .slice(0, 6)}
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default Account;
