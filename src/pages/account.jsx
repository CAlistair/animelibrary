import React, { useState } from "react";
import Navbar from "../components/navbar";
import Menu from "../components/menu";
import Footer from "../components/footer";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../app/userSlice";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";

function Account() {

  const user = useSelector(selectUser);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutOfApp = () =>{
    auth.signOut().then(() =>{
        dispatch(logout())
        navigate('/')
    }).catch((error) => alert(error.message))
}

  return (
    <section className="account">
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            {isMenuOpen && <Menu/>}
      <div className="account__container">
        <div className="account--info">
          <div className="account--header">
              <h1>Account: {user?.displayName}</h1>
              <Link to="/login">
                <button className="btn" onClick={logoutOfApp}>Logout</button>
              </Link>
          </div>
          <div className="account--list">
            <h2>Hi</h2>
            <h2>Loser</h2>
            <h2>This is still in progress so,</h2>
            <h2>DO me a favour and break this website</h2>
            <h2>Make sure to report them too</h2>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default Account;
