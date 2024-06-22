import React, { useEffect, useState } from "react";
import useDataApi from "../Hooks/axisFetch";
import Container from "@mui/material/Container";
import Pagination from "../components/Pagination";
import { styled, ThemeProvider, createTheme } from "@mui/material/styles";

// Create a theme object
const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
    background: {
      default: "#fff",
      paper: "#f5f5f5",
    },
  },
  typography: {
    fontFamily: "'Roboto', sans-serif",
  },
});

// Styled components using MUI styled function
const NewsItem = styled("li")(({ theme }) => ({
  marginBottom: theme.spacing(2),
  padding: theme.spacing(2),
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.paper,
  "&:hover": {
    backgroundColor: theme.palette.action.hover,
  },
}));

const NewsLink = styled("a")(({ theme }) => ({
  textDecoration: "none",
  color: theme.palette.text.primary,
  "&:hover": {
    textDecoration: "underline",
  },
}));

const News = () => {
  const apiUrl = `https://financialmodelingprep.com/api/v3/fmp/articles`;
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [{ data, isLoading, isError }, doFetch] = useDataApi(
    `${apiUrl}?page=${currentPage}&size=${itemsPerPage}&apikey=${process.env.REACT_APP_API_KEY}`
  );

  useEffect(() => {
    doFetch(
      `${apiUrl}?page=${currentPage}&size=${itemsPerPage}&apikey=${process.env.REACT_APP_API_KEY}`
    );
  }, [currentPage, itemsPerPage, doFetch]);

  if (isLoading) return <div>Loading ...</div>;
  if (isError) return <div>Something went wrong ...</div>;

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <h1 className="header">NEWS</h1>
        <h3>You can search by company name, company stock shortcut</h3>

        {data && (
          <ul>
            {data.content.map((item) => (
              <NewsItem key={item.id}>
                <NewsLink
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.title}
                </NewsLink>
              </NewsItem>
            ))}
          </ul>
        )}

        <div>
          <Pagination
            nPages={data ? Math.ceil(data.totalElements / itemsPerPage) : 1}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </Container>
    </ThemeProvider>
  );
};

export default News;
