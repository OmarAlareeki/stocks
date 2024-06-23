import React, { useState, useEffect } from "react";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "../auth/auth";
import Container from "@mui/material/Container";

const SavedTrack = () => {
  const [trackedItems, setTrackedItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(collection(db, "trackedStocks"), orderBy("createdAt", "desc")),
      (snapshot) => {
        const items = [];
        snapshot.forEach((doc) => {
          items.push({ id: doc.id, ...doc.data() });
        });
        setTrackedItems(items);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  return (
    <Container>
      <h1 className="header">SAVED TRACKS</h1>
      {loading ? (
        <div>Loading...</div>
      ) : trackedItems.length === 0 ? (
        <div>No tracked items found.</div>
      ) : (
        <ul className="list">
          {trackedItems.map((item) => (
            <li key={item.id}>
              <span>Symbol: {item.symbol}</span>
              <span>Price: ${item.price}</span>
              <span>Name: {item.name}</span>
              <span>Change: {item.change}%</span>
              {/* Add any other fields you want to display */}
            </li>
          ))}
        </ul>
      )}
    </Container>
  );
};

export default SavedTrack;
