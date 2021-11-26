import Home from "./Pages/Home";
import Merch from "./Pages/Merch";
import Login from "./Pages/Login";
import LiveChannel from "./Components/LiveChannel";
import SocialMedia from "./Components/SocialMedia";
import Followers from "./Components/Followers";
import Sponsers from "./Components/Sponsers";
import Footer from "./Components/Footer";
import Header from "./Components/Header"
import Contact from "./Components/Contact";
import Detail from '../src/Pages/Detail';
import Register from "./Pages/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
      <Router >
      <Header />
          <Routes>
            <Route exact path ="/" element = {<Home />} />
            <Route path = "/login" element = {<Login />} />
            <Route path = "/register" element = {<Register />} />
            <Route path = "/merch" element = {<Merch />} />
            <Route path ="/livechannel" element = {<LiveChannel />} />
            <Route path ="/socialmedia" element = {<SocialMedia />} />
            <Route path ="/followers" element = {<Followers />} />
            <Route path ="/sponsers" element = {<Sponsers />} />
            <Route path ="/contact" element = {<Contact />} />
            <Route path ="/detail" element = {<Detail />} />
          </Routes>
        <Footer />
    </Router>
  );
}

export default App;
