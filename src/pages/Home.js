import {
  Diamond,
  CurrencyBitcoin,
  CurrencyExchange,
  CurrencyYen,
  AttachMoney,
  Euro,
} from "@mui/icons-material";
import Container from "@mui/material/Container";
import "../../src/animation.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Container
      style={{
        height: "88vh",
        textAlign: "center",
        fontSize: "xxlarge",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around"
      }}
    >
      <h1
        style={{
          padding: "20px",
          textAlign: "center",
        }}
      >
        Welcome to <Diamond /> StockSearch
      </h1>
      <ul className="container">
        <li className="avatar"> <CurrencyBitcoin /></li>
        <li className="avatar"> <CurrencyExchange /></li>
        <li className="avatar"> <CurrencyYen /></li>
        <li className="avatar"> <AttachMoney /></li>
        <li className="avatar"> <Euro /></li>
      </ul>
      <div>
        <Link to="/login"
          style={{
            padding: "20px 50px",
            borderRadius: "45px",
            background: "green",
            textDecoration: "none",
            fontSize: "x-large",
            color: "white",
            border: "none"
          }}
        >
          Get started
        </Link>
      </div>
    </Container>
  );
};
export default Home;
