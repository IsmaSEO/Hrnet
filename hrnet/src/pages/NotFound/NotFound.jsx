import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import "./NotFound.css";

const NotFound = () => (
  <div className="not-found-container">
    <Navbar />
    <h1 className="not-found-title">404</h1>
    <h2 className="not-found-subtitle">
      Oups! La page que vous demandez existe pas.
    </h2>
    <Link to="/" className="not-found-link">
      Retourner sur la page accueil
    </Link>
    <Footer />
  </div>
);

export default NotFound;
