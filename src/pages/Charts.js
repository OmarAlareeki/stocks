import SearchInput from "../components/SearchInput";
import { useEffect, useState } from "react";
import "../../src/App.css";
// import useFetch from "../Hooks/useFetch";
import { LineChart } from "@mui/x-charts/LineChart";
import useDataApi from "../Hooks/axisFetch";

const Charts = () => {
  const [query, setQuery] = useState("GOOGL");
  const [{ data, isLoading, isError }, doFetch] = useDataApi(
    "https://financialmodelingprep.com/api/v3/historical-chart/5min/googl?from=2024-03-27&to=2024-03-27&apikey=YzDaadwGc4VHp4GhMG6gcAl5UsloEn1L"
  );
  console.log(data);
  return (
    <>
      <div
        onLoad={(event) => {
          doFetch(
            "https://financialmodelingprep.com/api/v3/historical-chart/5min/googl?from=2024-03-27&to=2024-03-27&apikey=YzDaadwGc4VHp4GhMG6gcAl5UsloEn1L"
          );

          event.preventDefault();
        }}
      >
        {isError && <div>Something went wrong ...</div>}
        {isLoading ? (
          <div>Loading ...</div>
        ) : (

          <>
          <LineChart
                    xAxis={[{ data: [1, 2, 3] }]}
                    series={

                        data.map((key) => {
                          return key.open
                        })  
                      }
                    width={500}
                    height={300}
                  />
          </>

        )}
      </div>
    </>
  );
};
export default Charts;

