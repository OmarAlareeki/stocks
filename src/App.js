import { ImCoinDollar } from "react-icons/im";
import { IoMenu } from "react-icons/io5";
import "./App.css";
import { useEffect, useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar } from "react-pro-sidebar";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import FiberNew from "@mui/icons-material/FiberNew";
import WaterfallChart from "@mui/icons-material/WaterfallChart";
import Sort from "@mui/icons-material/Sort";
import Moving from "@mui/icons-material/Moving";
import JoinFull from "@mui/icons-material/JoinFull";
import Equalizer from "@mui/icons-material/Equalizer";
import AccountBalance from "@mui/icons-material/AccountBalance";



function App() {


  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(
      "https://financialmodelingprep.com/api/v3/search-name?query=META&limit=50&exchange=NASDAQ&apikey=5JbedfpFQSiCRespheqYl9NO9BJHeHsG"
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
        <ImCoinDollar className="App-logo" />
        {/* <a href="https://www.flaticon.com/free-icons/precious" title="precious icons"></a> */}
        <input placeholder="search here..."/>
        
        {/* <IoMenu className="header-menu" /> */}

      </header>

      <div style={{ display: "flex", height: "100vh", flexDirection: "row-reverse" }}>
      <Sidebar className="app"  rtl={true}>
        <Menu>
          <MenuItem className="menu1" icon={<MenuRoundedIcon onClick={() => {
                  collapseSidebar();
                }} />}>
            <h2 icon={<AccountBalance />}>Home</h2>
          </MenuItem>
          <MenuItem icon={<FiberNew /> }> Dashboard </MenuItem>
          <MenuItem icon={<WaterfallChart />} > Invoices </MenuItem>
          <SubMenu label="Charts" icon={<Sort />}>
            <MenuItem> Timeline Chart </MenuItem>
            <MenuItem> Bubble Chart </MenuItem>
          </SubMenu>
          <SubMenu label="Wallets" icon={<Moving />}>
            <MenuItem>Current Wallet</MenuItem>
            <MenuItem>Savings Wallet</MenuItem>
          </SubMenu>
          <MenuItem icon={<JoinFull />}> Transactions </MenuItem>
          <SubMenu label="Settings" icon={<Equalizer />}>
            <MenuItem> Account </MenuItem>
            <MenuItem> Privacy </MenuItem>
            <MenuItem> Notifications </MenuItem>
          </SubMenu>
          <MenuItem> Logout </MenuItem>
        </Menu>
      </Sidebar>
      <h1>WELCOME TO QUICKPAY</h1>
    </div>


      {/* <div>
        {data.results.map((dataItem) => (
          // <span key={data.dataItem.request_id} width={100}>{dataItem}</span>
        ))}
      </div> */}
    </div>
  );
}

export default App;
