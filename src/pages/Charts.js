import SearchInput from "../components/SearchInput";
import { useEffect, useState } from "react";
import "../../src/App.css";
import useFetch from "../Hooks/useFetch";
import { BarChart } from "@mui/x-charts/BarChart";

const Charts = () => {
  const [text, setText] = useState("goog");
  // const [dateTextFrom, setDateTextFrom] = useState("2024-01-01");
  // const [dateTextTo, setDateTextTo] = useState("2024-03-01");
  const { data, isPending } = useFetch(
    "https://financialmodelingprep.com/api/v3/historical-chart/5min/goog?from=2024-03-27&to=2024-03-27&apikey=YzDaadwGc4VHp4GhMG6gcAl5UsloEn1L"
  );
  const [countIndex, setCountIndex] = useState([]);
  const [openPrice, setOpenPrice] = useState([]);
// openPrice.push({})
  // console.log(data)
  const handleLoopingChartData = () => {
    for (var i = 0; i < 1; i++) {
      // console.log(data[i])
      openPrice.push(data)
      openPrice.push(
        {'data': [data[i]['close'], data[i]['high'], data[i]['low'], data[i]['open']]})
    }
    
  };
  // console.log(data)

  handleLoopingChartData()
  console.log(openPrice)
 
  // const handleLooping = () => {
  //   for (var i = 0; i <= openPrice.length; i++) {
  //     countIndex.push(i);
  //   }
  //   setCountIndex()
  // };


 


  // useEffect(() => {
  //   handleLoopingChartData();
  //   handleLooping();
  // }, []);
  // handleLoopingChartData()

  return (
    <>
      <h1 className="header">KEEP TRACK OF YOUR SPENDINGS</h1>
      <h3>Charts</h3>
      <SearchInput
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        label="Company shortcut"
      />
      {/* <SearchInput type="text" value={dateTextFrom} onClick ={handleChange} label="Date From" />
        <SearchInput type="text" value={dateTextTo} onClick ={handleChange} label="Date To" />
        <button onClick={handleChange}>Check</button> */}
      <div className="listContainer">
        <div style={{ display: "flex", flexDirection: "column" }}>
          {isPending ? <div>Loading....</div> : <p>Data is here</p>}
          {/* {
            <BarChart
              series={openPrice}
              height={290}
              xAxis={[{ data: countIndex, scaleType: "band" }]}
              margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
            />
          } */}
          {/* {<BarChart
      series={[
        { data: [35, 44, 24, 34] },
        { data: [51, 6, 49, 30] },
        { data: [15, 25, 30, 50] },
        { data: [60, 50, 15, 25] },
        { data: [35, 44, 24, 34] },
        { data: [51, 6, 49, 30] },
        { data: [15, 25, 30, 50] },
        { data: [60, 50, 15, 25] },
        { data: [35, 44, 24, 34] },
        { data: [51, 6, 49, 30] },
        { data: [15, 25, 30, 50] },
        { data: [60, 50, 15, 25] },
        { data: [35, 44, 24, 34] },
        { data: [51, 6, 49, 30] },
        { data: [15, 25, 30, 50] },
        { data: [60, 50, 15, 25] },
        { data: [35, 44, 24, 34] },
        { data: [51, 6, 49, 30] },
        { data: [15, 25, 30, 50] },
        { data: [60, 50, 15, 25] },
        { data: [35, 44, 24, 34] },
        { data: [51, 6, 49, 30] },
        { data: [15, 25, 30, 50] },
        { data: [60, 50, 15, 25] },
        { data: [35, 44, 24, 34] },
        { data: [51, 6, 49, 30] },
        { data: [15, 25, 30, 50] },
        { data: [60, 50, 15, 25] },
        { data: [35, 44, 24, 34] },
        { data: [51, 6, 49, 30] },
        { data: [15, 25, 30, 50] },
        { data: [60, 50, 15, 25] },
      ]}
      height={290}
      xAxis={[{ data: ['Q1', 'Q2', 'Q3', 'Q4'], scaleType: 'band' }]}
      margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
    />} */}
          {/* {
            <LineChart
              xAxis={[{ data: countIndex }]}
              series={[
                {
                  data: highIndex,
                },
              ]}
              width={1000}
              height={300}
            />
          } */}
          {/* {data &&
            data.map((item) => {
              return (
                <div key={item.id} className="list">
                  <li>Company Symbol : {item.symbol}</li>
                  <li>Current Price : {item.price}</li>
                  <li>Compnay Name : {item.name}</li>
                  <li> Current Change : % {item.change}</li>
                  <li>Company Exchange Symbol : {item.exchange}</li>
                  <li>Company market Cap : {item.marketCap}</li>
                  <li>Open For : {item.open}</li>
                  <li> Previous closing Price : $ {item.previousClose}</li>
                  <li>Shares Outstanding : {item.sharesOutstanding}</li>
                  <li>High : {item.dayHigh}</li>
                  <li>Low : {item.dayLow}</li>
                  <li>Volume : {item.volume}</li>
                </div>
              );
            })} */}
        </div>
      </div>
    </>
  );
};
export default Charts;
