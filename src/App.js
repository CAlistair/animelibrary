import Navbar from "./components/navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Landing from "./pages/landing";
import Search from "./pages/search";
import Random from "./pages/random";
import Selected from "./pages/selected";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Account from "./pages/account";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./app/userSlice";
import { useEffect, useState } from "react";
import { auth } from "./firebase";


function App() {
  const dispatch = useDispatch();
  const [list, setList] = useState([])


  //persistence login
  //runs under a specific condition and [] makes it run once when components load
  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
          //onAuthStateChanged checks if user is logged in or logged out
      if (userAuth) {
        // User is signed in
        dispatch(
           //if user is signed in we dispatch login action
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
          })
        )
      } else {
        //user is signed out, we have to dispatch an action
        dispatch(logout())
      }
    })
  }, [dispatch])

  return (
    <Router>
      <>
        <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path="/search" element={<Search/>}/>
          <Route path="/search/:id" element={<Selected list={list} setList={setList}/>}/>
          <Route path="/random" element={<Random list={list} setList={setList}/>}/>
          <Route path=":id" element={<Selected list={list} setList={setList}/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/account" element={<Account/>}/>
          <Route path="/account/:id" element={<Selected list={list} setList={setList}/>}/>
        </Routes>
      </>
    </Router>
  );
}

export default App;
