import { useEffect, useState } from "react";
import useDataApi from "../Hooks/axisFetch";
import Container from "@mui/material/Container";
import Pagination from "../components/Pagination";

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
  }, [currentPage, itemsPerPage]);

  return (
    <>
      <Container>
        <h1 className="header"> NEWS</h1>
        <h3>You can search by company name, compnay stock shortcut</h3>

        <ul>
          {isError && <div>Something went wrong ...</div>}
          {isLoading ? (
            <div>Loading ...</div>
          ) : (
            <>
              {data &&
                data.content.map((item) => {
                  return (
                    <li key={item.id}>
                      <a href={item.link}>{item.title}</a>
                    </li>
                  );
                })}
            </>
          )}
        </ul>
        <div>
          <Pagination
            nPages={currentPage + 2}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </Container>
    </>
  );
};
export default News;
