import {
  Diamond,
  CurrencyBitcoin,
  CurrencyExchange,
  CurrencyYen,
  AttachMoney,
  Euro,
} from "@mui/icons-material";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";

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
      <div style={{ margin: "50px"}}>
        <CurrencyBitcoin />
        <CurrencyExchange />
        <CurrencyYen />
        <AttachMoney />
        <Euro />
      </div>
      <div>
        <button
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
        </button>
      </div>
    </Container>
  );
};
export default Home;
