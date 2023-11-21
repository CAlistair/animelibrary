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

function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path="/search" element={<Search/>}/>
          <Route path="/search/:id" element={<Selected/>}/>
          <Route path="/random" element={<Random/>}/>
          <Route path=":id" element={<Selected/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/account" element={<Account/>}/>
        </Routes>
      </>
    </Router>
  );
}

export default App;
