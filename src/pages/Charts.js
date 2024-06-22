import React, { useState, useEffect } from "react";
import axios from "axios";
import Container from "@mui/material/Container";
import SearchInput from "../components/SearchInput";
import Button from "@mui/material/Button";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import moment from "moment";

const Charts = () => {
  const [query, setQuery] = useState("GOOGL");
  const [startDate, setStartDate] = useState("2024-03-27");
  const [endDate, setEndDate] = useState("2024-03-27");
  const [startTime, setStartTime] = useState("00:00:00");
  const [endTime, setEndTime] = useState("23:59:59");
  const [chartData, setChartData] = useState([]);
  const [logoUrl, setLogoUrl] = useState(null);

  useEffect(() => {
    fetchData();
    fetchLogo();
  }, [query]);

  const fetchLogo = async () => {
    const apiUrl = `https://financialmodelingprep.com/api/v3/company/profile/${query}?apikey=${process.env.REACT_APP_API_KEY}`;

    try {
      const response = await axios.get(apiUrl);
      const logo = response.data.profile.image;
      setLogoUrl(logo);
    } catch (error) {
      console.error("Error fetching logo:", error);
      setLogoUrl(null); // Clear logo URL on error
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await fetchData();
  };

  const fetchData = async () => {
    const apiUrl = `https://financialmodelingprep.com/api/v3/historical-chart/5min/${query}?from=${startDate} ${startTime}&to=${endDate} ${endTime}&apikey=${process.env.REACT_APP_API_KEY}`;

    try {
      const response = await axios.get(apiUrl);
      const newData = response.data.map((entry) => ({
        date: moment(entry.date).toDate(),
        open: entry.open,
        change: entry.change,
      }));

      setChartData(newData);
    } catch (error) {
      console.error("Error fetching data:", error);
      setChartData([]); // Clear chart data on error
    }
  };

  return (
    <Container>
      <h1 className="header">Charts Page</h1>
      <h3>Enter a stock symbol and select the date range to see its historical price chart:</h3>

      <form onSubmit={handleSubmit}>
        <SearchInput
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <div style={{ marginTop: "10px", marginBottom: "10px" }}>
          <label>Start Date:</label>
          <input
            type="date"
            value={startDate}
            onChange={(event) => setStartDate(event.target.value)}
          />
          <input
            type="time"
            value={startTime}
            onChange={(event) => setStartTime(event.target.value)}
          />
        </div>
        <div style={{ marginTop: "10px", marginBottom: "10px" }}>
          <label>End Date:</label>
          <input
            type="date"
            value={endDate}
            onChange={(event) => setEndDate(event.target.value)}
          />
          <input
            type="time"
            value={endTime}
            onChange={(event) => setEndTime(event.target.value)}
          />
        </div>
        <Button variant="contained" size="small" type="submit">
          Search
        </Button>
      </form>

      {logoUrl && (
        <div style={{ marginTop: "20px" }}>
          <img src={logoUrl} alt="Company Logo" style={{ height: "100px" }} />
        </div>
      )}

      <div style={{ marginTop: "20px" }}>
        <LineChart
          width={800}
          height={400}
          data={chartData}
          margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="date"
            domain={["dataMin", "dataMax"]}
            scale="time"
            tickFormatter={(tick) => moment(tick).format("YYYY-MM-DD HH:mm")}
          />
          <YAxis />
          <Tooltip
            labelFormatter={(label) => moment(label).format("YYYY-MM-DD HH:mm")}
          />
          <Legend />
          <Line type="monotone" dataKey="open" stroke="#8884d8" dot={false} />
          <Line type="monotone" dataKey="change" stroke="#82ca9d" dot={false} />
        </LineChart>
      </div>
    </Container>
  );
};

export default Charts;
