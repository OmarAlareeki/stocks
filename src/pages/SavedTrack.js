import { useState, useEffect, useRef } from "react";
import {
  query,
  collection,
  orderBy,
  onSnapshot,
  limit,
} from "firebase/firestore";
import { auth } from "../auth/auth";
import { db } from "../auth/auth";
import { useUserAuth } from "../auth/UserAuthContent";
import Container from "@mui/material/Container";
import useDataApi from "../Hooks/axisFetch";
import ArrowDownward from "@mui/icons-material/ArrowDownward";
import ArrowUpward from "@mui/icons-material/ArrowUpward";

const SavedTrack = () => {
  const [quote, setQuote] = useState([]);
  const scroll = useRef();
  const { user } = useUserAuth(auth);
  const [{ data, isLoading, isError }, doFetch] = useDataApi();
  const list = [];
  console.log(data);

  useEffect(() => {
    const q = query(
      collection(db, "stks"),
      orderBy("createdAt", "desc"),
      limit(50)
    );
    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      const fetchedQuote = [];
      QuerySnapshot.forEach((doc) => {
        fetchedQuote.push({ ...doc.data(), id: doc.id });
      });
      const sortedQuote = fetchedQuote.sort(
        (a, b) => a.createdAt - b.createdAt
      );
      const listOfSymbols = () => {
        quote.map((item) => {
          list.push(item.text)
          return list
        })
      }

      setQuote(sortedQuote);
      listOfSymbols()
      doFetch(
        `https://financialmodelingprep.com/api/v3/quote/${[list]}?apikey=77xtVWmNu1DOGBroooyXNWCxELSM8FV5`
      );
    });
    return () => unsubscribe;
  }, [list,doFetch]);


  return (
    <>
      <Container>
        <h1 className="header">KEEP TRACK OF YOUR SAVED STOCKS</h1>
        <main className="chat-box">
          {/* <div>
            {quote?.map((quote) => (
              <div key={quote.id} quote={quote}>
                <span>{quote.text}</span>
              </div>
            ))}
          </div> */}
          {/* when a new message enters the chat, the screen scrolls down to the scroll div */}
          {/* <span ref={scroll}></span>
          <Search scroll={scroll} /> */}
        </main>
        {/* <div
          onLoad={(event) => {
         

            event.preventDefault();
          }}
        ></div> */}
        <div className="listContainer">
          <ul className="list">
            {isError && <div>Something went wrong ...</div>}
            {isLoading ? (
              <div>Loading ...</div>
            ) : (
              <>
                {data &&
                  data.map((item) => {
                    return (
                      <li key={item.id}>
                        <span>{item.symbol}</span>
                        <span>{item.price}</span>
                        <span>{item.name}</span>
                        <span> % {item.change}</span>
                        <>
                          {item.change < 0 ? (
                            <ArrowDownward style={{ color: "red" }} />
                          ) : (
                            <ArrowUpward />
                          )}
                        </>
                      </li>
                    );
                  })}
              </>
            )}
          </ul>
        </div>
      </Container>
    </>
  );
};

export default SavedTrack;
