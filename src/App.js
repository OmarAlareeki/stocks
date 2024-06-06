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
import CurrencyBitcoin from "@mui/icons-material/CurrencyBitcoin";
import Newspaper from "@mui/icons-material/Newspaper";
import Bolt from "@mui/icons-material/Bolt";
import Star from "@mui/icons-material/Star";
import Diamond from "@mui/icons-material/Diamond";
import Apps from "@mui/icons-material/Apps";
import Person from "@mui/icons-material/Person";
import SsidChart from "@mui/icons-material/SsidChart";
import { Routes, Route, Link } from "react-router-dom";
import StockSearch from "../src/pages/StockSearch";
import LatestChanges from "../src/pages/LatestChanges";
import News from "../src/pages/News";
import TradableStocks from "../src/pages/TradableStocks";
import Quote from "../src/pages/Quote";
import Search from "../src/pages/Search";
import Recommended from "../src/pages/Recommended";
import CompaniesProfile from "../src/pages/CompaniesProfile";
import Charts from "../src/pages/Charts";
import Crypto from "./pages/Crypto";
import SavedTrack from "../src/pages/SavedTrack";
import Profile from "../src/pages/Profile";
import Login from "./auth/Login";
import Signup from "./auth/SignUp";
import ProtectedRoute from "../src/auth/ProtectedRoute";
import { UserAuthContextProvider } from "../src/auth/UserAuthContent";
import Home from "../src/pages/Home";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function App() {
  const { collapseSidebar } = useProSidebar();

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
          <Menu>
            <MenuItem
              className="menu1"
              onClick={() => collapseSidebar()}
              icon={<MenuRoundedIcon />}
            ></MenuItem>

            <MenuItem
              component={<Link to="stock search" className="link" />}
              icon={<Apps className="icon-ready" />}
            >
              StockSearch
            </MenuItem>
            {/* <MenuItem
              component={<Link to="latest changes" className="link" />}
              icon={<Bolt />}
            >
              Latest Changes
            </MenuItem> */}
            {/* <SubMenu
              component={<Link to="news" className="link" />}
              label="News"
              icon={<Newspaper className="icon-ready" />}
            >
              <MenuItem> Stocks</MenuItem>
              <MenuItem> Currencies Exchange</MenuItem>
              <MenuItem> cryptocurrencies</MenuItem>
            </SubMenu> */}
            <MenuItem
              component={<Link to="news" className="link" />}
              icon={<Newspaper className="icon-ready" />}
            >
              News
            </MenuItem>
            {/* <MenuItem
              component={<Link to="tradable stocks" className="link" />}
              icon={<JoinFull className="icon-ready" />}
            >
              Tradable Stocks
            </MenuItem> */}
            {/* <SubMenu
              component={<Link to="quote" className="link" />}
              label="quote"
              icon={<RequestQuote className="icon-ready" />}
            >
              <MenuItem> Full Quote</MenuItem>
              <MenuItem> Simple Quote</MenuItem>
            </SubMenu> */}
            <MenuItem
              component={<Link to="quote" className="link" />}
              icon={<RequestQuote className="icon-ready" />}
            >
              Quote
            </MenuItem>

            <MenuItem
              component={<Link to="search" className="link" />}
              icon={<Radar className="icon-ready" />}
            >
              Search
            </MenuItem>

            {/* <MenuItem
              component={<Link to="recommended" className="link" />}
              icon={<SsidChart />}
            >
              Charts
            </MenuItem> */}
            <MenuItem
              component={<Link to="companies profile" className="link" />}
              icon={<Info className="icon-ready" />}
            >
              Companies Profile
            </MenuItem>
            {/* <SubMenu
              component={<Link to="Charts" className="link" />}
              label="charts"
              icon={<SsidChart />}
            >
              <MenuItem> Chart Intraday </MenuItem>
              <MenuItem> Daily Chart</MenuItem>
            </SubMenu> */}
            {/* <MenuItem
              component={<Link to="recommended" className="link" />}
              icon={<Insights />}
            >
              Recommended
            </MenuItem> */}
            {/* <SubMenu
              component={<Link to="crypto" className="link" />}
              label="Crypto"
              icon={<CurrencyBitcoin className="icon-ready" />}
            >
              <MenuItem> Account </MenuItem>
              <MenuItem> Privacy </MenuItem>
              <MenuItem> Notifications </MenuItem>
            </SubMenu> */}

            <MenuItem
              component={<Link to="crypto" className="link" />}
              icon={<CurrencyBitcoin className="icon-ready" />}
            >
              Crypto
            </MenuItem>

            <MenuItem
              component={<Link to="saved track" className="link" />}
              icon={<Star />}
            >
              Saved Track
            </MenuItem>
            <MenuItem
              component={<Link to="profile" className="link" />}
              icon={<Person />}
            >
              Profile
            </MenuItem>
          </Menu>
        </Sidebar>
      </div>

      <section>
        <UserAuthContextProvider>
          <Routes>
            <Route index element={<Home />} style={{ width: "100%" }} />
            <Route path="stock search" element={<StockSearch />} />
            <Route path="latest changes" element={<LatestChanges />} />
            <Route path="news" element={<News />} />
            {/* <Route path="tradable stocks" element={<TradableStocks />} /> */}
            <Route path="quote" element={<Quote />} />
            <Route path="search" element={<Search />} />
            <Route path="recommended" element={<Recommended />} />
            <Route path="companies profile" element={<CompaniesProfile />} />
            {/* <Route path="Charts" element={<Charts />} /> */}
            <Route path="Crypto" element={<Crypto />} />
            <Route
              path="saved track"
              element={
                <ProtectedRoute>
                  <SavedTrack />
                </ProtectedRoute>
              }
            />

            <Route
              path="profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </UserAuthContextProvider>
      </section>
    </div>
  );
}

export default App;
