// import useFetch from "../Hooks/useFetch";
// import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Typography from "@mui/material/Typography";
// import { useState, useEffect } from "react";

// const News = () => {
//   const [list, setList] = useState([])
//   const url = "https://newsapi.org/v2/everything?q=tesla&from=2024-02-24&sortBy=publishedAt&apiKey=ca794f1f31034e9285dbfe50f138b074";
//   const [data] = useFetch(url);
//   // console.log(data)

//   // useEffect(() => {
//   //   list.push(data.articles)
//   //   setList()
//   // },[list])
//   // console.log(list)


//   return (
//     <div className="listContainer">
//       {/* <ul className="list">
//         {list && list.map((item) => {
//             return (
//               <li key={item.id} style={{width: "230px", padding: "3px", background: "#3bff00", borderRadius: "5px"}}>
//                 <Card sx={{ maxWidth: 345 }}>
//                   <CardMedia
//                     sx={{ height: 140 }}
//                     image={item.urlToImage}
//                     title="image"
//                   />
//                   <CardContent>
//                     <Typography gutterBottom variant="h5" component="div">
//                       {item.source.name}
//                     </Typography>
//                     <Typography variant="body2" color="text.secondary">
//                     {item.title}
//                     </Typography>
//                   </CardContent>
//                   <CardActions>
//                     <a 
//                     style={{fontSize: "16px", color: "rgb(162, 68, 255)"}}
//                     href ={item.url}size="small" target="_blank">{item.source.name}</a>
//                   </CardActions>
//                 </Card>
//               </li>
//             );
//           })}
//       </ul> */}

//       <h1 className="header">KEEP TRACK OF YOUR SPENDINGS</h1>
//       <h3>Seamless Transactions</h3>
//     </div>
//   );
// };
// export default News;
