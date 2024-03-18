import { ImCoinDollar } from "react-icons/im";
import { IoMenu } from "react-icons/io5";
import "./App.css";
import { useEffect, useState } from "react";
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  useProSidebar,
} from "react-pro-sidebar";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import Insights from "@mui/icons-material/Insights";
import Info from "@mui/icons-material/Info";
import RequestQuote from "@mui/icons-material/RequestQuote";
import Radar from "@mui/icons-material/Radar";
import JoinFull from "@mui/icons-material/JoinFull";
import Equalizer from "@mui/icons-material/Equalizer";
import Newspaper from "@mui/icons-material/Newspaper";
import Bolt from "@mui/icons-material/Bolt";
import Star from "@mui/icons-material/Star";
import Diamond from "@mui/icons-material/Diamond";
import Logout from "@mui/icons-material/Logout";
import SsidChart from "@mui/icons-material/SsidChart";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  const Home = () => {
    return (
      <>
        <h1 className="header">WELCOME TO QUICKPAY</h1>
        <h3>Bank of the free</h3>
      </>
    );
  };

  const Latest = () => {
    return (
      <>
        <h1 className="header"> DASHBOARD PAGE</h1>
        <h3>Welcome User</h3>
      </>
    );
  };

  const News = () => {
    return (
      <>
        <h1 className="header">KEEP TRACK OF YOUR SPENDINGS</h1>
        <h3>Seamless Transactions</h3>
      </>
    );
  };

  const TradableStocks = () => {
    return (
      <>
        <h1 className="header"> DASHBOARD PAGE</h1>
        <h3>Welcome User</h3>
      </>
    );
  };

  const Quote = () => {
    return (
      <>
        <h1 className="header">KEEP TRACK OF YOUR SPENDINGS</h1>
        <h3>Seamless Transactions</h3>
      </>
    );
  };

  const Search = () => {
    return (
      <>
        <h1 className="header"> DASHBOARD PAGE</h1>
        <h3>Welcome User</h3>
      </>
    );
  };

  const Recommended = () => {
    return (
      <>
        <h1 className="header">KEEP TRACK OF YOUR SPENDINGS</h1>
        <h3>Seamless Transactions</h3>
      </>
    );
  };

  const CompaniesProfile = () => {
    return (
      <>
        <h1 className="header"> DASHBOARD PAGE</h1>
        <h3>Welcome User</h3>
      </>
    );
  };

  const Charts = () => {
    return (
      <>
        <h1 className="header">KEEP TRACK OF YOUR SPENDINGS</h1>
        <h3>Seamless Transactions</h3>
      </>
    );
  };

  const Moving = () => {
    return (
      <>
        <h1 className="header"> DASHBOARD PAGE</h1>
        <h3>Welcome User</h3>
      </>
    );
  };

  const SavedTrack = () => {
    return (
      <>
        <h1 className="header">KEEP TRACK OF YOUR SPENDINGS</h1>
        <h3>Seamless Transactions</h3>
      </>
    );
  };

  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(
      "https://financialmodelingprep.com/api/v3/symbol/available-cryptocurrencies?apikey=5JbedfpFQSiCRespheqYl9NO9BJHeHsG"
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);

  const { collapseSidebar } = useProSidebar();
  return (
    <div className="App">
      <header className="App-header">
        {/* <ImCoinDollar className="App-logo" /> */}
        <span>{<Diamond className="App-logo" />} StockSearch</span>
      </header>

      <div
        style={{
          display: "flex",
          height: "100vh",
          flexDirection: "row-reverse",
          position: "fixed",
          right: "0px",
          fontSize: "12px",
        }}
      >
        <Sidebar
          className="app"
          ltr={true}
          style={{
            border: "none",
            scrollbarWidth: "0px",
          }}
        >
          <Menu>
            <MenuItem
              component={<Link to="/" className="link" />}
              className="menu1"
              icon={
                <MenuRoundedIcon
                  onClick={() => {
                    collapseSidebar();
                  }}
                />
              }
            >
              <h2>Home</h2>
            </MenuItem>
            <MenuItem icon={<Bolt />}> Latest Changes</MenuItem>
            <SubMenu
              component={<Link to="quote" className="link" />}
              label="news"
              icon={<Newspaper />}
            >
              <MenuItem> Stocks</MenuItem>
              <MenuItem> Currencies Exchange</MenuItem>
              <MenuItem> cryptocurrencies</MenuItem>
            </SubMenu>
            <MenuItem
              component={<Link to="tradable stocks" className="link" />}
              icon={<JoinFull />}
            >
              Tradable Stocks
            </MenuItem>
            <SubMenu
              component={<Link to="quote" className="link" />}
              label="Quote"
              icon={<RequestQuote />}
            >
              <MenuItem> Full Quote</MenuItem>
              <MenuItem> Simple Quote</MenuItem>
            </SubMenu>

            <MenuItem
              component={<Link to="search" className="link" />}
              icon={<Radar />}
            >
              Search
            </MenuItem>

            <MenuItem
              component={<Link to="recommended" className="link" />}
              icon={<Insights />}
            >
              Recommended
            </MenuItem>
            <MenuItem
              component={<Link to="companies profile" className="link" />}
              icon={<Info />}
            >
              Companies Profile
            </MenuItem>
            <SubMenu
              component={<Link to="charts" className="link" />}
              label="Charts"
              icon={<SsidChart />}
            >
              <MenuItem> Chart Intraday </MenuItem>
              <MenuItem> Daily Chart</MenuItem>
            </SubMenu>
            <SubMenu
              component={<Link to="moving" className="link" />}
              label="Moving"
              icon={<Equalizer />}
            >
              <MenuItem> Account </MenuItem>
              <MenuItem> Privacy </MenuItem>
              <MenuItem> Notifications </MenuItem>
            </SubMenu>
            <MenuItem
              component={<Link to="saved track" className="link" />}
              icon={<Star />}
            >
              Saved Track
            </MenuItem>
            <MenuItem icon={<Logout />}> Logout </MenuItem>
          </Menu>
        </Sidebar>
      </div>

      <section>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="latest" element={<Latest />} />
          <Route path="news" element={<News />} />
          <Route path="tradable stocks" element={<TradableStocks />} />
          <Route path="quote" element={<Quote />} />
          <Route path="search" element={<Search />} />
          <Route path="recommended" element={<Recommended />} />
          <Route path="companies profile" element={<CompaniesProfile />} />
          <Route path="charts" element={<Charts />} />
          <Route path="moving" element={<Moving />} />
          <Route path="Saved Track" element={<SavedTrack />} />
        </Routes>
      </section>
      {/* <ul>
          {data.map((dataItem) => (
            <li key={data.dataItem} width={100}>
              {dataItem}
            </li>
          ))}
        </ul> */}
    </div>
  );
}

export default App;
