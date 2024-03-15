import { ImCoinDollar } from "react-icons/im";
import { IoMenu } from "react-icons/io5";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch(
  //     "https://financialmodelingprep.com/api/v3/is-the-market-open?apikey=5JbedfpFQSiCRespheqYl9NO9BJHeHsG"
  //   )
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       console.log(data);
  //       setData(data);
  //     });
  // }, []);

  return (
    <div className="App">
      <header className="App-header">
        <ImCoinDollar className="App-logo" />
        {/* <a href="https://www.flaticon.com/free-icons/precious" title="precious icons"></a> */}
        <input />
        <IoMenu className="header-menu" />
      </header>


      {/* <div>
        {data.results.map((dataItem) => (
          // <span key={data.dataItem.request_id} width={100}>{dataItem}</span>
        ))}
      </div> */}
    </div>
  );
}

export default App;
