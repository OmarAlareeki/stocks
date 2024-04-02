import React, { Fragment, useState, useEffect } from 'react';
import useDataApi from "../Hooks/axisFetch";
// https://financialmodelingprep.com/api/v3/profile/AAPL?apikey=YzDaadwGc4VHp4GhMG6gcAl5UsloEn1L
const Recommended = () => {
  const [query, setQuery] = useState('GOOGL');
  const [{ data, isLoading, isError }, doFetch] = useDataApi(
    'https://financialmodelingprep.com/api/v3/profile/GOOGL?apikey=YzDaadwGc4VHp4GhMG6gcAl5UsloEn1L');
    console.log(data)
    return (
      <>
        <h1 className="header">KEEP TRACK OF YOUR SPENDINGS</h1>
        <h3>Seamless Transactions</h3>
        <Fragment>
      <form
        onSubmit={event => {
          doFetch(
            `https://financialmodelingprep.com/api/v3/profile/${query}`+ "?apikey=YzDaadwGc4VHp4GhMG6gcAl5UsloEn1L",
          );

          event.preventDefault();
        }}
      >
        <input
          type="text"
          value={query}
          onChange={event => setQuery(event.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {isError && <div>Something went wrong ...</div>}

      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <ul>
          {data && data.map(item => (
            <div key={item.symbol}>
              <li>{item.symbol}</li>
              <img src={item.image} width={100} height={100} />
            </div>
          ))}
        </ul>
      )}
    </Fragment>
      </>
    );
  };

  export default Recommended