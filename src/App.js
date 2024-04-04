import React from "react";
import "./App.css";
import { useEffect, useState } from "react";
import {
  Sidebar,
  Menu,
  SubMenu,
  MenuItem,
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
import Apps from "@mui/icons-material/Apps";
import Logout from "@mui/icons-material/Logout";
import SsidChart from "@mui/icons-material/SsidChart";
import { Routes, Route, Link } from "react-router-dom";
import StockSearch from "../src/pages/StockSearch";
import LatestChanges from "../src/pages/LatestChanges";
// import News from "../src/pages/News";
import TradableStocks from "../src/pages/TradableStocks";
import Quote from "../src/pages/Quote";
import Search from "../src/pages/Search";
import Recommended from "../src/pages/Recommended";
import CompaniesProfile from "../src/pages/CompaniesProfile";
import Charts from "../src/pages/Charts";
import Moving from "../src/pages/Moving";
import SavedTrack from "../src/pages/SavedTrack";
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import useFetch from "./Hooks/useFetch";

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode],
  );

  const {data, isPending} = useFetch("https://financialmodelingprep.com/api/v3/stock/full/real-time-price?apikey=5JbedfpFQSiCRespheqYl9NO9BJHeHsG");

  // useEffect(() => {
  //   fetch(
  //     "https://financialmodelingprep.com/api/v3/symbol/available-cryptocurrencies?apikey=5JbedfpFQSiCRespheqYl9NO9BJHeHsG"
  //   )
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       console.log(data);
  //       setData(data);
  //     });
  // }, []);

  const { collapseSidebar } = useProSidebar();
  // const [menuCollapse, setMenuCollapse] = useState(false);
  // const menuIconClick = () => {
  //   //condition checking to change state from true to false and vice versa
  //   menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  // };
  return (
    <div className="App">
      <header className="App-header">
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
          boxShadow:
            "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
        }}
      >
        <Sidebar className="app">
          {/* <Sidebar
          className="app"
          ltr={true}
          style={{
            border: "none",
            scrollbarWidth: "0px",
          }}
        > */}

          <div className="logotext">
            {/* Icon change using menucollapse state */}
            {/* <p>{menuCollapse ? <MenuRoundedIcon /> : <MenuRoundedIcon />}</p> */}
          </div>
          {/* <div className="closemenu" onClick={menuIconClick}> */}
          {/* changing menu collapse icon on click */}
          {/* {menuCollapse ? <FiArrowRightCircle /> : <FiArrowLeftCircle />} */}
          <Menu>
            <MenuItem
              className="menu1"
              icon={
                <MenuRoundedIcon
                  onClick={() => {
                    collapseSidebar();
                  }}
                />
              }
            ></MenuItem>

            <MenuItem
              component={<Link to="stock search" className="link" />}
              icon={<Apps />}
            >
              StockSearch
            </MenuItem>
            <MenuItem
              component={<Link to="latest changes" className="link" />}
              icon={<Bolt />}
            >
              Latest Changes
            </MenuItem>
            {/* <SubMenu
              component={<Link to="news" className="link" />}
              label="news"
              icon={<Newspaper />}
            >
              <MenuItem> Stocks</MenuItem>
              <MenuItem> Currencies Exchange</MenuItem>
              <MenuItem> cryptocurrencies</MenuItem>
            </SubMenu> */}
            <MenuItem
              component={<Link to="tradable stocks" className="link" />}
              icon={<JoinFull />}
            >
              Tradable Stocks
            </MenuItem>
            <SubMenu
              component={<Link to="quote" className="link" />}
              label="quote"
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
              component={<Link to="Charts" className="link" />}
              label="charts"
              icon={<SsidChart />}
            >
              <MenuItem> Chart Intraday </MenuItem>
              <MenuItem> Daily Chart</MenuItem>
            </SubMenu>
            <SubMenu
              component={<Link to="moving" className="link" />}
              label="moving"
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
          <Route exact path="stock search" element={<StockSearch />} />
          <Route path="latest changes" element={<LatestChanges />} />
          {/* <Route path="news" element={<News />} /> */}
          <Route path="tradable stocks" element={<TradableStocks />} />
          <Route path="quote" element={<Quote />} />
          <Route path="search" element={<Search />} />
          <Route path="recommended" element={<Recommended />} />
          <Route path="companies profile" element={<CompaniesProfile />} />
          <Route path="Charts" element={<Charts />} />
          <Route path="moving" element={<Moving />} />
          <Route path="Saved Track" element={<SavedTrack />} />
        </Routes>
      </section>
    </div>
  );
}

export default App;
