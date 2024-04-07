import { useState, useEffect } from "react";
import useFetch from "../Hooks/useFetch";
import Container from "@mui/material/Container";

const CompaniesProfile = () => {
  const [imageUrl, setImageUrl] = useState(null);
  const { data, isPending } = useFetch(
    "https://financialmodelingprep.com/api/v3/profile/GOOGL?apikey=YzDaadwGc4VHp4GhMG6gcAl5UsloEn1L"
  );
  // useEffect(() => {
  //   setImageUrl(data[0].image)
  //   console.log(imageUrl)
  // })

  return (
    <>
      <Container>
        <h1 className="header"> Companies Profile</h1>
        <h3>Welcome User</h3>
        {isPending && <div>Loading....</div>}
        {data &&
          data.map((item) => {
            return (
              <ul>
                <li>{item.symbol}</li>
                <li>{item.ceo}</li>
                <li>{item.companyName}</li>
                <li>{item.country}</li>
                <li>{item.description}</li>
                <li>{item.exchangeShortName}</li>
                <li>{item.industry}</li>
                <li>{item.ipoDate}</li>
                <li>{item.mktCap}</li>
                <li>{item.price}</li>
                <li>{item.website}</li>
                <img src={item.image} />
              </ul>
            );
          })}
      </Container>
    </>
  );
};

export default CompaniesProfile;
